from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

old_css = '''    .donation-links { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 18px 0 22px; }
    .donation-link { display: flex; align-items: center; justify-content: center; min-height: 46px; padding: 10px 14px; border-radius: 12px; color: #06212d; background: var(--cyan); font-weight: 800; text-decoration: none; }
    .donation-link:last-child { background: var(--lime); }'''
new_css = '''    .info-payment-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 18px 0 12px; }
    .info-payment-card { display: flex; flex-direction: column; min-width: 0; padding: 16px; border: 1px solid var(--line); border-radius: 16px; background: rgba(2,18,27,.46); }
    .info-payment-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
    .info-payment-symbol { display: grid; place-items: center; width: 40px; height: 40px; flex: 0 0 40px; border: 1px solid rgba(76,215,229,.35); border-radius: 12px; color: var(--cyan); background: rgba(76,215,229,.09); font-weight: 900; }
    .info-payment-card.stripe .info-payment-symbol { color: #ffd75d; border-color: rgba(255,215,93,.35); background: rgba(255,215,93,.08); }
    .info-payment-brand h3 { margin: 0; color: var(--text); font-size: 1rem; }
    .info-payment-desc { margin: 0 !important; color: var(--muted); font-size: .88rem; line-height: 1.5; }
    .info-payment-badges { display: flex; flex-wrap: wrap; gap: 7px; margin: 13px 0 15px; }
    .info-payment-badges span { display: inline-flex; align-items: center; min-height: 28px; padding: 4px 9px; border: 1px solid var(--line); border-radius: 999px; color: var(--muted); background: rgba(14,48,69,.65); font-size: .72rem; font-weight: 760; }
    .info-payment-action { display: flex; align-items: center; justify-content: center; min-height: 44px; margin-top: auto; padding: 9px 12px; border-radius: 12px; color: #06212d; background: linear-gradient(90deg,var(--cyan),#55a8ff); font-weight: 850; text-align: center; text-decoration: none; }
    .info-payment-card.stripe .info-payment-action { background: linear-gradient(90deg,#ffe45c,#ffb84d); }
    .info-payment-action:hover { filter: brightness(1.04); transform: translateY(-1px); }
    .info-payment-availability { margin: 0 0 22px !important; color: var(--muted); font-size: .8rem; line-height: 1.5; }'''
if old_css not in s:
    raise SystemExit('Expected old donation CSS not found')
s = s.replace(old_css, new_css, 1)

old_mobile = '      .donation-links { grid-template-columns: 1fr; }'
new_mobile = '      .info-payment-options { grid-template-columns: 1fr; }'
if old_mobile not in s:
    raise SystemExit('Expected mobile donation rule not found')
s = s.replace(old_mobile, new_mobile, 1)

old_html = '''      <p data-i18n="donationPrompt">You can make donations to:</p>
      <div class="donation-links">
        <a class="donation-link" href="https://www.paypal.com/ncp/payment/RU2CWCNVQ7XD6" target="_blank" rel="noopener">PayPal</a>
        <a class="donation-link" href="https://buy.stripe.com/7sYeVd7Blfe89cm0k02kw00" target="_blank" rel="noopener" data-i18n="cardPayment">Card Payment (Stripe)</a>
      </div>
      <p><strong data-i18n="cryptoWallet">Crypto Wallet:</strong></p>'''
new_html = '''      <p data-i18n="donationPrompt">You can make donations to:</p>
      <div class="info-payment-options">
        <article class="info-payment-card">
          <div class="info-payment-brand"><span class="info-payment-symbol">P</span><h3>PayPal</h3></div>
          <p class="info-payment-desc" data-i18n="paypalDesc">Pay securely with PayPal or other payment options offered by PayPal Checkout.</p>
          <div class="info-payment-badges"><span>PayPal</span><span data-i18n="paymentCards">Debit / Credit Card</span><span>Apple Pay</span></div>
          <a class="info-payment-action" href="https://www.paypal.com/ncp/payment/RU2CWCNVQ7XD6" target="_blank" rel="noopener noreferrer" data-i18n="paypalAction">Donate with PayPal ↗</a>
        </article>
        <article class="info-payment-card stripe">
          <div class="info-payment-brand"><span class="info-payment-symbol">S</span><h3>Stripe</h3></div>
          <p class="info-payment-desc" data-i18n="stripeDesc">Pay securely by card or with payment methods available through Stripe Checkout.</p>
          <div class="info-payment-badges"><span data-i18n="paymentCards">Debit / Credit Card</span><span>Link</span><span data-i18n="digitalWallets">Digital wallets</span></div>
          <a class="info-payment-action" href="https://buy.stripe.com/7sYeVd7Blfe89cm0k02kw00" target="_blank" rel="noopener noreferrer" data-i18n="stripeAction">Donate with Stripe ↗</a>
        </article>
      </div>
      <p class="info-payment-availability" data-i18n="paymentAvailability">Available payment methods can vary by country, device and payment provider.</p>
      <p><strong data-i18n="cryptoWallet">Crypto Wallet:</strong></p>'''
if old_html not in s:
    raise SystemExit('Expected old donation HTML not found')
s = s.replace(old_html, new_html, 1)

replacements = {
    "cardPayment:'Card Payment (Stripe)',cryptoWallet:": "cardPayment:'Card Payment (Stripe)',paypalDesc:'Pay securely with PayPal or other payment options offered by PayPal Checkout.',stripeDesc:'Pay securely by card or with payment methods available through Stripe Checkout.',paymentCards:'Debit / Credit Card',digitalWallets:'Digital wallets',paypalAction:'Donate with PayPal ↗',stripeAction:'Donate with Stripe ↗',paymentAvailability:'Available payment methods can vary by country, device and payment provider.',cryptoWallet:",
    "cardPayment:'Kartično plaćanje (Stripe)',cryptoWallet:": "cardPayment:'Kartično plaćanje (Stripe)',paypalDesc:'Platite sigurno putem PayPala ili drugim načinima plaćanja koje nudi PayPal Checkout.',stripeDesc:'Platite sigurno karticom ili načinima plaćanja dostupnima putem Stripe Checkouta.',paymentCards:'Debitna / kreditna kartica',digitalWallets:'Digitalni novčanici',paypalAction:'Doniraj putem PayPala ↗',stripeAction:'Doniraj putem Stripea ↗',paymentAvailability:'Dostupni načini plaćanja mogu se razlikovati ovisno o državi, uređaju i pružatelju plaćanja.',cryptoWallet:",
    "cardPayment:'Kartenzahlung (Stripe)',cryptoWallet:": "cardPayment:'Kartenzahlung (Stripe)',paypalDesc:'Sicher mit PayPal oder weiteren von PayPal Checkout angebotenen Zahlungsmethoden bezahlen.',stripeDesc:'Sicher per Karte oder mit den über Stripe Checkout verfügbaren Zahlungsmethoden bezahlen.',paymentCards:'Debit- / Kreditkarte',digitalWallets:'Digitale Wallets',paypalAction:'Mit PayPal spenden ↗',stripeAction:'Mit Stripe spenden ↗',paymentAvailability:'Verfügbare Zahlungsmethoden können je nach Land, Gerät und Zahlungsanbieter variieren.',cryptoWallet:",
    "cardPayment:'Pagamento con carta (Stripe)',cryptoWallet:": "cardPayment:'Pagamento con carta (Stripe)',paypalDesc:'Paga in modo sicuro con PayPal o con gli altri metodi disponibili tramite PayPal Checkout.',stripeDesc:'Paga in modo sicuro con carta o con i metodi disponibili tramite Stripe Checkout.',paymentCards:'Carta di debito / credito',digitalWallets:'Portafogli digitali',paypalAction:'Dona con PayPal ↗',stripeAction:'Dona con Stripe ↗',paymentAvailability:'I metodi di pagamento disponibili possono variare in base al Paese, al dispositivo e al fornitore di pagamento.',cryptoWallet:",
    "cardPayment:'Pago con tarjeta (Stripe)',cryptoWallet:": "cardPayment:'Pago con tarjeta (Stripe)',paypalDesc:'Paga de forma segura con PayPal u otros métodos disponibles mediante PayPal Checkout.',stripeDesc:'Paga de forma segura con tarjeta o con los métodos disponibles mediante Stripe Checkout.',paymentCards:'Tarjeta de débito / crédito',digitalWallets:'Carteras digitales',paypalAction:'Donar con PayPal ↗',stripeAction:'Donar con Stripe ↗',paymentAvailability:'Los métodos de pago disponibles pueden variar según el país, el dispositivo y el proveedor de pago.',cryptoWallet:"
}
for old, new in replacements.items():
    if old not in s:
        raise SystemExit('Translation anchor not found: ' + old[:45])
    s = s.replace(old, new, 1)

if 'apps-games-info-standard.js' in s:
    raise SystemExit('Unexpected shared Info script found')

p.write_text(s, encoding='utf-8')
print('Unit Converter Info upgraded')
