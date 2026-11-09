/* Unit Converter — owner's original Adsterra GET CODE.
 * One banner on the approved hostname, only after recorded advertising consent.
 * No auto-refresh, no scripts on preview hosts, no requests while offline.
 * Parser-time document.write() is used in other Apps & Games web pilots,
 * but this technique is not separately confirmed by Adsterra support.
 */
(() => {
  "use strict";
  if (location.hostname !== "unitconverter.appsandgames.org") return;
  if (document.readyState !== "loading") return;
  if (navigator.onLine === false) return;

  const current = document.currentScript;
  const slot = current?.parentElement;
  const area = slot?.parentElement;
  const unit = current?.dataset.unit;
  if (!slot?.classList.contains("unit-ad-slot") ||
      area?.id !== "unit-ad-area") return;

  const desktop = matchMedia("(min-width: 800px)").matches;
  const mobile = matchMedia("(min-width: 320px) and (max-width: 799px)").matches;
  if (!((desktop && unit === "desktop") || (mobile && unit === "mobile"))) return;

  let allowed = false;
  try {
    const cookie = document.cookie.split(";").map(part => part.trim())
      .find(part => part.startsWith("ag_privacy_choices_v1="));
    const consent = cookie && JSON.parse(decodeURIComponent(
      cookie.slice("ag_privacy_choices_v1=".length)));
    const age = consent && Date.now() - consent.timestamp;
    allowed = !!consent && consent.version === 1 &&
      consent.partnerRevision === "adsterra-2026-11" &&
      consent.advertising === true && Number.isFinite(age) &&
      age >= 0 && age <= 180 * 24 * 60 * 60 * 1000;
  } catch (_) { allowed = false; }
  if (!allowed) return;

  const snippets = {
    desktop: "<script>\n  atOptions = {\n    'key' : '2c6f12f5a91f91b7cef6606761bf3b13',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/2c6f12f5a91f91b7cef6606761bf3b13\"></script>",
    mobile: "<script>\n  atOptions = {\n    'key' : '1fded40ca2b1359a56d77af41bf78c57',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/1fded40ca2b1359a56d77af41bf78c57\"></script>"
  };
  area.hidden = false;
  slot.hidden = false;
  const label = document.createElement("span");
  label.className = "unit-ad-label";
  label.textContent = "Advertisement";
  slot.insertBefore(label, current);
  document.write(snippets[unit]);
})();
