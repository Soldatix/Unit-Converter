from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')

css_anchor = "    .wallet code { display: block; overflow-wrap: anywhere; color: #e7f5fb; font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: .83rem; }"
css_add = css_anchor + "\n    .wallet { display: grid; grid-template-columns: minmax(0, 1fr) auto; column-gap: 10px; align-items: center; }\n    .wallet strong { grid-column: 1; }\n    .wallet code { grid-column: 1; }\n    .wallet-copy { grid-column: 2; grid-row: 1 / 3; min-width: 76px; height: 36px; padding: 0 11px; border: 1px solid rgba(76,215,229,.28); border-radius: 10px; color: var(--cyan); background: rgba(76,215,229,.08); font-weight: 800; font-size: .78rem; }\n    .wallet-copy:hover { color: #06212d; background: var(--cyan); }"
if css_anchor not in s:
    raise SystemExit('wallet CSS anchor not found')
s = s.replace(css_anchor, css_add, 1)

pattern = re.compile(r'<div class="wallet"><strong>([^<]+)</strong><code>([^<]+)</code></div>')
found = pattern.findall(s)
if len(found) != 8:
    raise SystemExit(f'Expected 8 wallet rows, found {len(found)}')
s = pattern.sub(lambda m: f'<div class="wallet"><strong>{m.group(1)}</strong><code>{m.group(2)}</code><button type="button" class="wallet-copy" data-copy-wallet data-i18n="copyWallet">Copy</button></div>', s)

translations = {
"cryptoWallet:'Crypto Wallet:'}": "cryptoWallet:'Crypto Wallet:',copyWallet:'Copy',copyWalletDone:'Copied!'}",
"cryptoWallet:'Kripto novčanici:'}": "cryptoWallet:'Kripto novčanici:',copyWallet:'Kopiraj',copyWalletDone:'Kopirano!'}",
"cryptoWallet:'Krypto-Wallets:'}": "cryptoWallet:'Krypto-Wallets:',copyWallet:'Kopieren',copyWalletDone:'Kopiert!'}",
"cryptoWallet:'Portafogli crypto:'}": "cryptoWallet:'Portafogli crypto:',copyWallet:'Copia',copyWalletDone:'Copiato!'}",
"cryptoWallet:'Monederos de criptomonedas:'}": "cryptoWallet:'Monederos de criptomonedas:',copyWallet:'Copiar',copyWalletDone:'¡Copiado!'}",
}
for old, new in translations.items():
    if old not in s:
        raise SystemExit('translation anchor not found: ' + old)
    s = s.replace(old, new, 1)

js_anchor = "    els.languageSelect.addEventListener('change',e=>{state.language=e.target.value; localStorage.setItem('unitConverterLanguage',state.language); localize();});"
js_insert = """    document.querySelectorAll('[data-copy-wallet]').forEach(button=>button.addEventListener('click',async()=>{\n      const address=button.closest('.wallet')?.querySelector('code')?.textContent?.trim();\n      if(!address)return;\n      try{\n        await navigator.clipboard.writeText(address);\n      }catch{\n        const area=document.createElement('textarea'); area.value=address; area.style.position='fixed'; area.style.opacity='0';\n        document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove();\n      }\n      button.textContent=t('copyWalletDone');\n      showToast(t('copyWalletDone'));\n      setTimeout(()=>button.textContent=t('copyWallet'),1000);\n    }));\n""" + js_anchor
if js_anchor not in s:
    raise SystemExit('JS anchor not found')
s = s.replace(js_anchor, js_insert, 1)

p.write_text(s, encoding='utf-8')
print('Added crypto wallet copy buttons')
