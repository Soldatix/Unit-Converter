    const translations = {
      en: { appTitle:'Unit Converter', info:'Info', language:'Language', instant:'Instant conversion', headline:'Convert without limits.', subhead:'Everyday and technical units in one fast, clear converter.', from:'From', to:'To', clear:'Clear', alsoEquals:'Also equals', copied:'Result copied', invalid:'Enter a valid number', swap:'Swap units', copy:'Copy result', categories:{length:'Length',time:'Time',volume:'Volume',area:'Area',mass:'Mass',power:'Power',data:'Bits & Bytes',energy:'Energy',speed:'Speed',temperature:'Temperature',pressure:'Pressure',fuel:'Fuel consumption',frequency:'Frequency',angle:'Angle'}, notes:{power:'kW and horsepower measure power. kWh is available under Energy.',fuel:'Fuel economy uses inverse conversion; zero cannot be converted.'}},
      hr: { appTitle:'Pretvarač jedinica', info:'Info', language:'Jezik', instant:'Trenutno pretvaranje', headline:'Pretvaraj bez granica.', subhead:'Svakodnevne i tehničke jedinice u jednom brzom i preglednom pretvaraču.', from:'Iz', to:'U', clear:'Obriši', alsoEquals:'Jednako je i', copied:'Rezultat je kopiran', invalid:'Unesite ispravan broj', swap:'Zamijeni jedinice', copy:'Kopiraj rezultat', categories:{length:'Dužina',time:'Vrijeme',volume:'Volumen',area:'Površina',mass:'Masa',power:'Snaga',data:'Bitovi i bajtovi',energy:'Energija',speed:'Brzina',temperature:'Temperatura',pressure:'Tlak',fuel:'Potrošnja goriva',frequency:'Frekvencija',angle:'Kut'}, notes:{power:'kW i konjske snage mjere snagu. kWh se nalazi pod Energija.',fuel:'Potrošnja goriva koristi obrnuti izračun; nula se ne može pretvoriti.'}},
      de: { appTitle:'Einheitenumrechner', info:'Info', language:'Sprache', instant:'Sofortige Umrechnung', headline:'Grenzenlos umrechnen.', subhead:'Alltags- und technische Einheiten in einem schnellen, übersichtlichen Umrechner.', from:'Von', to:'In', clear:'Löschen', alsoEquals:'Entspricht auch', copied:'Ergebnis kopiert', invalid:'Gültige Zahl eingeben', swap:'Einheiten tauschen', copy:'Ergebnis kopieren', categories:{length:'Länge',time:'Zeit',volume:'Volumen',area:'Fläche',mass:'Masse',power:'Leistung',data:'Bits & Bytes',energy:'Energie',speed:'Geschwindigkeit',temperature:'Temperatur',pressure:'Druck',fuel:'Kraftstoffverbrauch',frequency:'Frequenz',angle:'Winkel'}, notes:{power:'kW und Pferdestärken messen Leistung. kWh finden Sie unter Energie.',fuel:'Der Kraftstoffverbrauch wird invers umgerechnet; Null ist nicht möglich.'}},
      it: { appTitle:'Convertitore di unità', info:'Info', language:'Lingua', instant:'Conversione istantanea', headline:'Converti senza limiti.', subhead:'Unità quotidiane e tecniche in un convertitore rapido e chiaro.', from:'Da', to:'A', clear:'Cancella', alsoEquals:'Equivale anche a', copied:'Risultato copiato', invalid:'Inserisci un numero valido', swap:'Scambia unità', copy:'Copia risultato', categories:{length:'Lunghezza',time:'Tempo',volume:'Volume',area:'Area',mass:'Massa',power:'Potenza',data:'Bit e Byte',energy:'Energia',speed:'Velocità',temperature:'Temperatura',pressure:'Pressione',fuel:'Consumo carburante',frequency:'Frequenza',angle:'Angolo'}, notes:{power:'kW e cavalli misurano la potenza. I kWh sono nella categoria Energia.',fuel:'Il consumo usa una conversione inversa; zero non può essere convertito.'}},
      es: { appTitle:'Conversor de unidades', info:'Info', language:'Idioma', instant:'Conversión instantánea', headline:'Convierte sin límites.', subhead:'Unidades cotidianas y técnicas en un conversor rápido y claro.', from:'De', to:'A', clear:'Borrar', alsoEquals:'También equivale a', copied:'Resultado copiado', invalid:'Introduce un número válido', swap:'Intercambiar unidades', copy:'Copiar resultado', categories:{length:'Longitud',time:'Tiempo',volume:'Volumen',area:'Área',mass:'Masa',power:'Potencia',data:'Bits y Bytes',energy:'Energía',speed:'Velocidad',temperature:'Temperatura',pressure:'Presión',fuel:'Consumo de combustible',frequency:'Frecuencia',angle:'Ángulo'}, notes:{power:'Los kW y los caballos miden potencia. Los kWh están en Energía.',fuel:'El consumo usa una conversión inversa; no se puede convertir cero.'}}
    };

    const extraTranslations = {
      en:{brandTagline:'Free online apps',categoryNav:'Conversion categories',fromUnit:'From unit',toUnit:'To unit',close:'Close',infoTitle:'Information / Donations',donationFree:'The application is free to use, but donations are welcome.',donationPart:'A part of the received donations will be forwarded to various charitable organizations.',donationLargest:'The largest part will be donated to institutions caring for children without adequate parental care.',donationPrompt:'You can make donations to:',cardPayment:'Card Payment (Stripe)',paypalDesc:'Pay securely with PayPal or other payment options offered by PayPal Checkout.',stripeDesc:'Pay securely by card or with payment methods available through Stripe Checkout.',paymentCards:'Debit / Credit Card',digitalWallets:'Digital wallets',paypalAction:'Donate with PayPal ↗',stripeAction:'Donate with Stripe ↗',paymentAvailability:'Available payment methods can vary by country, device and payment provider.',cryptoWallet:'Crypto Wallet:',copyWallet:'Copy',copyWalletDone:'Copied!'},
      hr:{brandTagline:'Besplatne online aplikacije',categoryNav:'Kategorije pretvaranja',fromUnit:'Početna jedinica',toUnit:'Ciljna jedinica',close:'Zatvori',infoTitle:'Informacije / Donacije',donationFree:'Aplikacija je besplatna za korištenje, ali donacije su dobrodošle.',donationPart:'Dio primljenih donacija bit će proslijeđen raznim dobrotvornim organizacijama.',donationLargest:'Najveći dio bit će doniran ustanovama koje skrbe o djeci bez odgovarajuće roditeljske skrbi.',donationPrompt:'Donirati možete putem:',cardPayment:'Kartično plaćanje (Stripe)',paypalDesc:'Platite sigurno putem PayPala ili drugim načinima plaćanja koje nudi PayPal Checkout.',stripeDesc:'Platite sigurno karticom ili načinima plaćanja dostupnima putem Stripe Checkouta.',paymentCards:'Debitna / kreditna kartica',digitalWallets:'Digitalni novčanici',paypalAction:'Doniraj putem PayPala ↗',stripeAction:'Doniraj putem Stripea ↗',paymentAvailability:'Dostupni načini plaćanja mogu se razlikovati ovisno o državi, uređaju i pružatelju plaćanja.',cryptoWallet:'Kripto novčanici:',copyWallet:'Kopiraj',copyWalletDone:'Kopirano!'},
      de:{brandTagline:'Kostenlose Online-Apps',categoryNav:'Umrechnungskategorien',fromUnit:'Ausgangseinheit',toUnit:'Zieleinheit',close:'Schließen',infoTitle:'Informationen / Spenden',donationFree:'Die Anwendung kann kostenlos genutzt werden, Spenden sind jedoch willkommen.',donationPart:'Ein Teil der erhaltenen Spenden wird an verschiedene gemeinnützige Organisationen weitergeleitet.',donationLargest:'Der größte Teil wird an Einrichtungen gespendet, die Kinder ohne angemessene elterliche Fürsorge betreuen.',donationPrompt:'Sie können spenden über:',cardPayment:'Kartenzahlung (Stripe)',paypalDesc:'Sicher mit PayPal oder weiteren von PayPal Checkout angebotenen Zahlungsmethoden bezahlen.',stripeDesc:'Sicher per Karte oder mit den über Stripe Checkout verfügbaren Zahlungsmethoden bezahlen.',paymentCards:'Debit- / Kreditkarte',digitalWallets:'Digitale Wallets',paypalAction:'Mit PayPal spenden ↗',stripeAction:'Mit Stripe spenden ↗',paymentAvailability:'Verfügbare Zahlungsmethoden können je nach Land, Gerät und Zahlungsanbieter variieren.',cryptoWallet:'Krypto-Wallets:',copyWallet:'Kopieren',copyWalletDone:'Kopiert!'},
      it:{brandTagline:'Applicazioni online gratuite',categoryNav:'Categorie di conversione',fromUnit:'Unità di partenza',toUnit:'Unità di arrivo',close:'Chiudi',infoTitle:'Informazioni / Donazioni',donationFree:'L’applicazione è gratuita, ma le donazioni sono benvenute.',donationPart:'Una parte delle donazioni ricevute sarà destinata a varie organizzazioni benefiche.',donationLargest:'La parte maggiore sarà donata a istituti che si occupano di bambini privi di adeguate cure parentali.',donationPrompt:'Puoi effettuare una donazione tramite:',cardPayment:'Pagamento con carta (Stripe)',paypalDesc:'Paga in modo sicuro con PayPal o con gli altri metodi disponibili tramite PayPal Checkout.',stripeDesc:'Paga in modo sicuro con carta o con i metodi disponibili tramite Stripe Checkout.',paymentCards:'Carta di debito / credito',digitalWallets:'Portafogli digitali',paypalAction:'Dona con PayPal ↗',stripeAction:'Dona con Stripe ↗',paymentAvailability:'I metodi di pagamento disponibili possono variare in base al Paese, al dispositivo e al fornitore di pagamento.',cryptoWallet:'Portafogli crypto:',copyWallet:'Copia',copyWalletDone:'Copiato!'},
      es:{brandTagline:'Aplicaciones gratuitas en línea',categoryNav:'Categorías de conversión',fromUnit:'Unidad de origen',toUnit:'Unidad de destino',close:'Cerrar',infoTitle:'Información / Donaciones',donationFree:'La aplicación es gratuita, pero las donaciones son bienvenidas.',donationPart:'Una parte de las donaciones recibidas se destinará a diversas organizaciones benéficas.',donationLargest:'La mayor parte se donará a instituciones que atienden a niños sin una atención parental adecuada.',donationPrompt:'Puedes realizar una donación mediante:',cardPayment:'Pago con tarjeta (Stripe)',paypalDesc:'Paga de forma segura con PayPal u otros métodos disponibles mediante PayPal Checkout.',stripeDesc:'Paga de forma segura con tarjeta o con los métodos disponibles mediante Stripe Checkout.',paymentCards:'Tarjeta de débito / crédito',digitalWallets:'Carteras digitales',paypalAction:'Donar con PayPal ↗',stripeAction:'Donar con Stripe ↗',paymentAvailability:'Los métodos de pago disponibles pueden variar según el país, el dispositivo y el proveedor de pago.',cryptoWallet:'Monederos de criptomonedas:',copyWallet:'Copiar',copyWalletDone:'¡Copiado!'}
    };

    Object.entries(extraTranslations).forEach(([language,values])=>Object.assign(translations[language],values));
    Object.assign(translations.en,{switchLight:'Switch to light theme',switchDark:'Switch to dark theme'});
    Object.assign(translations.hr,{switchLight:'Prebaci na svijetlu temu',switchDark:'Prebaci na tamnu temu'});
    Object.assign(translations.de,{switchLight:'Zur hellen Darstellung wechseln',switchDark:'Zur dunklen Darstellung wechseln'});
    Object.assign(translations.it,{switchLight:'Passa al tema chiaro',switchDark:'Passa al tema scuro'});
    Object.assign(translations.es,{switchLight:'Cambiar al tema claro',switchDark:'Cambiar al tema oscuro'});
    Object.assign(translations.en.categories,{torque:'Torque',force:'Force',dataRate:'Data transfer rate'});
    Object.assign(translations.hr.categories,{torque:'Okretni moment',force:'Sila',dataRate:'Brzina prijenosa podataka'});
    Object.assign(translations.de.categories,{torque:'Drehmoment',force:'Kraft',dataRate:'Datenübertragungsrate'});
    Object.assign(translations.it.categories,{torque:'Coppia',force:'Forza',dataRate:'Velocità di trasferimento dati'});
    Object.assign(translations.es.categories,{torque:'Par motor',force:'Fuerza',dataRate:'Velocidad de transferencia de datos'});

    const shoppingTranslations = {
      en:{categories:{shoes:'Shoe sizes',clothing:'Clothing sizes',hats:'Hat sizes',rings:'Ring sizes',roman:'Roman numerals'},notes:{shoes:'Approximate international comparison. Brand size charts take priority.',clothing:'Choose a profile and garment type. Clothing sizes vary by brand and cut.',hats:'Based primarily on head circumference. Brand fit can vary.',rings:'Approximate international comparison. Measure the inner diameter or circumference carefully.',roman:'Standard Roman numerals from 1 to 3999.'},profile:'Profile',garment:'Garment',men:'Men',women:'Women',children:'Children',tops:'Tops / jackets',bottoms:'Trousers / bottoms',dresses:'Dresses',sizeComparison:'Size comparison',sizeNote:'Selected row is highlighted · approximate guide',approx:'approx.'},
      hr:{categories:{shoes:'Veličine obuće',clothing:'Veličine odjeće',hats:'Veličine šešira',rings:'Veličine prstena',roman:'Rimski brojevi'},notes:{shoes:'Približna međunarodna usporedba. Tablica proizvođača ima prednost.',clothing:'Odaberite profil i vrstu odjeće. Veličine ovise o proizvođaču i kroju.',hats:'Pretvorba se prvenstveno temelji na opsegu glave. Kroj proizvođača može odstupati.',rings:'Približna međunarodna usporedba. Pažljivo izmjerite unutarnji promjer ili opseg.',roman:'Standardni rimski brojevi od 1 do 3999.'},profile:'Profil',garment:'Vrsta odjeće',men:'Muškarci',women:'Žene',children:'Djeca',tops:'Gornji dio / jakne',bottoms:'Hlače / donji dio',dresses:'Haljine',sizeComparison:'Usporedba veličina',sizeNote:'Odabrani red je istaknut · približni vodič',approx:'pribl.'},
      de:{categories:{shoes:'Schuhgrößen',clothing:'Kleidergrößen',hats:'Hutgrößen',rings:'Ringgrößen',roman:'Römische Zahlen'},notes:{shoes:'Ungefähre internationale Vergleichswerte. Die Größentabelle des Herstellers hat Vorrang.',clothing:'Profil und Kleidungsart wählen. Größen unterscheiden sich je nach Marke und Schnitt.',hats:'Die Umrechnung basiert hauptsächlich auf dem Kopfumfang. Die Passform kann je nach Marke abweichen.',rings:'Ungefähre internationale Vergleichswerte. Innendurchmesser oder Umfang sorgfältig messen.',roman:'Standardmäßige römische Zahlen von 1 bis 3999.'},profile:'Profil',garment:'Kleidungsart',men:'Herren',women:'Damen',children:'Kinder',tops:'Oberteile / Jacken',bottoms:'Hosen / Unterteile',dresses:'Kleider',sizeComparison:'Größenvergleich',sizeNote:'Ausgewählte Zeile hervorgehoben · ungefähre Orientierung',approx:'ca.'},
      it:{categories:{shoes:'Taglie scarpe',clothing:'Taglie abbigliamento',hats:'Taglie cappelli',rings:'Misure anelli',roman:'Numeri romani'},notes:{shoes:'Confronto internazionale indicativo. Fa fede la tabella taglie del produttore.',clothing:'Scegli profilo e tipo di capo. Le taglie variano in base a marca e vestibilità.',hats:'Conversione basata soprattutto sulla circonferenza della testa. La vestibilità può variare.',rings:'Confronto internazionale indicativo. Misura con attenzione diametro interno o circonferenza.',roman:'Numeri romani standard da 1 a 3999.'},profile:'Profilo',garment:'Tipo di capo',men:'Uomo',women:'Donna',children:'Bambini',tops:'Top / giacche',bottoms:'Pantaloni / parte inferiore',dresses:'Abiti',sizeComparison:'Confronto taglie',sizeNote:'Riga selezionata evidenziata · guida indicativa',approx:'circa'},
      es:{categories:{shoes:'Tallas de calzado',clothing:'Tallas de ropa',hats:'Tallas de sombrero',rings:'Tallas de anillo',roman:'Números romanos'},notes:{shoes:'Comparación internacional aproximada. La tabla del fabricante tiene prioridad.',clothing:'Elige perfil y tipo de prenda. Las tallas varían según marca y corte.',hats:'La conversión se basa principalmente en el contorno de la cabeza. El ajuste puede variar.',rings:'Comparación internacional aproximada. Mide cuidadosamente el diámetro interior o la circunferencia.',roman:'Números romanos estándar del 1 al 3999.'},profile:'Perfil',garment:'Tipo de prenda',men:'Hombre',women:'Mujer',children:'Niños',tops:'Partes de arriba / chaquetas',bottoms:'Pantalones / parte inferior',dresses:'Vestidos',sizeComparison:'Comparación de tallas',sizeNote:'Fila seleccionada resaltada · guía aproximada',approx:'aprox.'}
    };
    Object.entries(shoppingTranslations).forEach(([language,values])=>{
      // Merge nested translation groups without overwriting the existing
      // categories/notes from the original Unit Converter.
      Object.assign(translations[language].categories, values.categories);
      Object.assign(translations[language].notes, values.notes);
      const { categories: _categories, notes: _notes, ...topLevelValues } = values;
      Object.assign(translations[language], topLevelValues);
    });

    const factorUnit = (id, symbol, factor, name) => ({id, symbol, factor, name, toBase:v=>v*factor, fromBase:v=>v/factor});
    const categories = {
      length:{icon:'↔️', units:[factorUnit('mm','mm',.001,'Millimetre'),factorUnit('cm','cm',.01,'Centimetre'),factorUnit('m','m',1,'Metre'),factorUnit('km','km',1000,'Kilometre'),factorUnit('in','in',.0254,'Inch'),factorUnit('ft','ft',.3048,'Foot'),factorUnit('yd','yd',.9144,'Yard'),factorUnit('mi','mi',1609.344,'Mile'),factorUnit('nmi','nmi',1852,'Nautical mile')], defaults:['km','mi']},
      time:{icon:'⏱️', units:[factorUnit('ms','ms',.001,'Millisecond'),factorUnit('s','s',1,'Second'),factorUnit('min','min',60,'Minute'),factorUnit('h','h',3600,'Hour'),factorUnit('day','day',86400,'Day'),factorUnit('week','week',604800,'Week'),factorUnit('month','month',2629800,'Average month'),factorUnit('year','year',31557600,'Average year')], defaults:['h','min']},
      volume:{icon:'🧪', units:[factorUnit('ml','mL',.001,'Millilitre'),factorUnit('cl','cL',.01,'Centilitre'),factorUnit('dl','dL',.1,'Decilitre'),factorUnit('l','L',1,'Litre'),factorUnit('m3','m³',1000,'Cubic metre'),factorUnit('cup','cup',.2365882365,'US cup'),factorUnit('floz','fl oz',.0295735295625,'US fluid ounce'),factorUnit('galus','US gal',3.785411784,'US gallon'),factorUnit('galuk','UK gal',4.54609,'Imperial gallon')], defaults:['l','galus']},
      area:{icon:'◻️', units:[factorUnit('mm2','mm²',1e-6,'Square millimetre'),factorUnit('cm2','cm²',1e-4,'Square centimetre'),factorUnit('m2','m²',1,'Square metre'),factorUnit('a','a',100,'Are'),factorUnit('ha','ha',10000,'Hectare'),factorUnit('km2','km²',1e6,'Square kilometre'),factorUnit('ft2','ft²',.09290304,'Square foot'),factorUnit('yd2','yd²',.83612736,'Square yard'),factorUnit('acre','acre',4046.8564224,'Acre'),factorUnit('mi2','mi²',2589988.110336,'Square mile')], defaults:['m2','ft2']},
      mass:{icon:'⚖️', units:[factorUnit('mg','mg',1e-6,'Milligram'),factorUnit('g','g',.001,'Gram'),factorUnit('kg','kg',1,'Kilogram'),factorUnit('t','t',1000,'Metric tonne'),factorUnit('oz','oz',.028349523125,'Ounce'),factorUnit('lb','lb',.45359237,'Pound'),factorUnit('st','st',6.35029318,'Stone')], defaults:['kg','lb']},
      power:{icon:'⚡', units:[factorUnit('w','W',1,'Watt'),factorUnit('kw','kW',1000,'Kilowatt'),factorUnit('mw','MW',1e6,'Megawatt'),factorUnit('ks','KS / PS',735.49875,'Metric horsepower'),factorUnit('hp','hp',745.6998715822702,'Mechanical horsepower'),factorUnit('btuh','BTU/h',.29307107,'BTU per hour')], defaults:['kw','ks']},
      torque:{icon:'🔧', units:[factorUnit('nm','N·m',1,'Newton metre'),factorUnit('knm','kN·m',1000,'Kilonewton metre'),factorUnit('lbft','lb-ft',1.3558179483314,'Pound-foot'),factorUnit('lbin','lb-in',.1129848290276167,'Pound-inch'),factorUnit('kgfm','kgf·m',9.80665,'Kilogram-force metre')], defaults:['nm','lbft']},
      force:{icon:'🏋️', units:[factorUnit('n','N',1,'Newton'),factorUnit('kn','kN',1000,'Kilonewton'),factorUnit('kgf','kgf',9.80665,'Kilogram-force'),factorUnit('lbf','lbf',4.4482216152605,'Pound-force')], defaults:['n','lbf']},
      data:{icon:'💾', units:[factorUnit('bit','bit',1,'Bit'),factorUnit('byte','B',8,'Byte'),factorUnit('kbit','kbit',1e3,'Kilobit'),factorUnit('kbyte','kB',8e3,'Kilobyte'),factorUnit('kib','KiB',8192,'Kibibyte'),factorUnit('mbit','Mbit',1e6,'Megabit'),factorUnit('mbyte','MB',8e6,'Megabyte'),factorUnit('mib','MiB',8388608,'Mebibyte'),factorUnit('gbit','Gbit',1e9,'Gigabit'),factorUnit('gbyte','GB',8e9,'Gigabyte'),factorUnit('gib','GiB',8589934592,'Gibibyte'),factorUnit('tb','TB',8e12,'Terabyte'),factorUnit('tib','TiB',8796093022208,'Tebibyte')], defaults:['mbyte','mbit']},
      dataRate:{icon:'📶', units:[factorUnit('kbits','kbit/s',1e3,'Kilobits per second'),factorUnit('mbits','Mbit/s',1e6,'Megabits per second'),factorUnit('gbits','Gbit/s',1e9,'Gigabits per second'),factorUnit('kbytes','kB/s',8e3,'Kilobytes per second'),factorUnit('mbytes','MB/s',8e6,'Megabytes per second'),factorUnit('gbytes','GB/s',8e9,'Gigabytes per second')], defaults:['mbits','mbytes']},
      energy:{icon:'🔋', units:[factorUnit('j','J',1,'Joule'),factorUnit('kj','kJ',1e3,'Kilojoule'),factorUnit('mj','MJ',1e6,'Megajoule'),factorUnit('wh','Wh',3600,'Watt-hour'),factorUnit('kwh','kWh',3.6e6,'Kilowatt-hour'),factorUnit('cal','cal',4.184,'Calorie'),factorUnit('kcal','kcal',4184,'Kilocalorie'),factorUnit('btu','BTU',1055.05585262,'British thermal unit')], defaults:['kwh','mj']},
      speed:{icon:'🏎️', units:[factorUnit('ms','m/s',1,'Metres per second'),factorUnit('kmh','km/h',1/3.6,'Kilometres per hour'),factorUnit('mph','mph',.44704,'Miles per hour'),factorUnit('knot','kn',.514444444,'Knot'),factorUnit('fts','ft/s',.3048,'Feet per second')], defaults:['kmh','mph']},
      temperature:{icon:'🌡️', units:[{id:'c',symbol:'°C',name:'Celsius',toBase:v=>v,fromBase:v=>v},{id:'f',symbol:'°F',name:'Fahrenheit',toBase:v=>(v-32)*5/9,fromBase:v=>v*9/5+32},{id:'k',symbol:'K',name:'Kelvin',toBase:v=>v-273.15,fromBase:v=>v+273.15}], defaults:['c','f']},
      pressure:{icon:'⏲️', units:[factorUnit('pa','Pa',1,'Pascal'),factorUnit('kpa','kPa',1e3,'Kilopascal'),factorUnit('bar','bar',1e5,'Bar'),factorUnit('mbar','mbar',100,'Millibar'),factorUnit('psi','psi',6894.757293168,'Pounds per square inch'),factorUnit('atm','atm',101325,'Standard atmosphere'),factorUnit('mmhg','mmHg',133.322387415,'Millimetres of mercury')], defaults:['bar','psi']},
      fuel:{icon:'⛽', units:[{id:'l100',symbol:'L/100 km',name:'Litres per 100 km',toBase:v=>v,fromBase:v=>v},{id:'kml',symbol:'km/L',name:'Kilometres per litre',toBase:v=>100/v,fromBase:v=>100/v},{id:'mpgus',symbol:'mpg US',name:'US miles per gallon',toBase:v=>235.214583/v,fromBase:v=>235.214583/v},{id:'mpguk',symbol:'mpg UK',name:'Imperial miles per gallon',toBase:v=>282.480936/v,fromBase:v=>282.480936/v}], defaults:['l100','mpgus']},
      frequency:{icon:'〰️', units:[factorUnit('hz','Hz',1,'Hertz'),factorUnit('khz','kHz',1e3,'Kilohertz'),factorUnit('mhz','MHz',1e6,'Megahertz'),factorUnit('ghz','GHz',1e9,'Gigahertz'),factorUnit('rpm','rpm',1/60,'Revolutions per minute')], defaults:['mhz','ghz']},
      angle:{icon:'📐', units:[factorUnit('deg','°',1,'Degree'),factorUnit('rad','rad',180/Math.PI,'Radian'),factorUnit('grad','gon',.9,'Gradian'),factorUnit('turn','turn',360,'Turn'),factorUnit('arcmin','arcmin',1/60,'Arcminute'),factorUnit('arcsec','arcsec',1/3600,'Arcsecond')], defaults:['deg','rad']}
    };

    const namedUnit=(id,symbol,name,names)=>({id,symbol,name,names});
    const U={
      shoes:[
        namedUnit('eu','EU','EU size',{hr:'EU veličina',de:'EU-Größe',it:'Taglia EU',es:'Talla EU'}),
        namedUnit('usm','US M','US Men',{hr:'US muška',de:'US Herren',it:'US uomo',es:'US hombre'}),
        namedUnit('usw','US W','US Women',{hr:'US ženska',de:'US Damen',it:'US donna',es:'US mujer'}),
        namedUnit('uk','UK','UK size',{hr:'UK veličina',de:'UK-Größe',it:'Taglia UK',es:'Talla UK'}),
        namedUnit('cm','cm','Foot length',{hr:'Dužina stopala',de:'Fußlänge',it:'Lunghezza piede',es:'Longitud del pie'}),
        namedUnit('inch','in','Foot length',{hr:'Dužina stopala',de:'Fußlänge',it:'Lunghezza piede',es:'Longitud del pie'})
      ],
      hats:[
        namedUnit('intl','INT','International',{hr:'Međunarodna',de:'International',it:'Internazionale',es:'Internacional'}),
        namedUnit('cm','cm','Head circumference',{hr:'Opseg glave',de:'Kopfumfang',it:'Circonferenza testa',es:'Contorno de cabeza'}),
        namedUnit('inch','in','Head circumference',{hr:'Opseg glave',de:'Kopfumfang',it:'Circonferenza testa',es:'Contorno de cabeza'}),
        namedUnit('us','US','US hat size',{hr:'US veličina',de:'US-Hutgröße',it:'Taglia cappello US',es:'Talla sombrero US'}),
        namedUnit('uk','UK','UK hat size',{hr:'UK veličina',de:'UK-Hutgröße',it:'Taglia cappello UK',es:'Talla sombrero UK'})
      ],
      rings:[
        namedUnit('eu','EU / mm','EU circumference',{hr:'EU opseg',de:'EU-Umfang',it:'Circonferenza EU',es:'Circunferencia EU'}),
        namedUnit('us','US','US size',{hr:'US veličina',de:'US-Größe',it:'Misura US',es:'Talla US'}),
        namedUnit('uk','UK','UK size',{hr:'UK veličina',de:'UK-Größe',it:'Misura UK',es:'Talla UK'}),
        namedUnit('jp','JP','Japan size',{hr:'Japanska veličina',de:'Japan-Größe',it:'Misura Giappone',es:'Talla Japón'}),
        namedUnit('diameter','mm Ø','Inner diameter',{hr:'Unutarnji promjer',de:'Innendurchmesser',it:'Diametro interno',es:'Diámetro interior'})
      ],
      roman:[
        namedUnit('arabic','123','Arabic number',{hr:'Arapski broj',de:'Arabische Zahl',it:'Numero arabo',es:'Número arábigo'}),
        namedUnit('roman','I V X','Roman numeral',{hr:'Rimski broj',de:'Römische Zahl',it:'Numero romano',es:'Número romano'})
      ]
    };

    const shoeRows=[
      {eu:35.5,usm:4,usw:5.5,uk:3,cm:22,inch:8.66},{eu:36,usm:4.5,usw:6,uk:3.5,cm:22.5,inch:8.86},
      {eu:37,usm:5,usw:6.5,uk:4,cm:23,inch:9.06},{eu:37.5,usm:5.5,usw:7,uk:4.5,cm:23.5,inch:9.25},
      {eu:38,usm:6,usw:7.5,uk:5,cm:24,inch:9.45},{eu:39,usm:6.5,usw:8,uk:5.5,cm:24.5,inch:9.65},
      {eu:40,usm:7,usw:8.5,uk:6,cm:25,inch:9.84},{eu:40.5,usm:7.5,usw:9,uk:6.5,cm:25.5,inch:10.04},
      {eu:41,usm:8,usw:9.5,uk:7,cm:26,inch:10.24},{eu:42,usm:8.5,usw:10,uk:7.5,cm:26.5,inch:10.43},
      {eu:42.5,usm:9,usw:10.5,uk:8,cm:27,inch:10.63},{eu:43,usm:9.5,usw:11,uk:8.5,cm:27.5,inch:10.83},
      {eu:44,usm:10,usw:11.5,uk:9,cm:28,inch:11.02},{eu:44.5,usm:10.5,usw:12,uk:9.5,cm:28.5,inch:11.22},
      {eu:45,usm:11,usw:12.5,uk:10,cm:29,inch:11.42},{eu:45.5,usm:11.5,usw:13,uk:10.5,cm:29.5,inch:11.61},
      {eu:46,usm:12,usw:13.5,uk:11,cm:30,inch:11.81},{eu:47,usm:12.5,usw:14,uk:11.5,cm:30.5,inch:12.01},
      {eu:47.5,usm:13,usw:14.5,uk:12,cm:31,inch:12.20}
    ];

    const hatRows=[
      {intl:'S',cm:54,inch:21.26,us:'6 3/4',uk:'6 5/8'},{intl:'S',cm:55,inch:21.65,us:'6 7/8',uk:'6 3/4'},
      {intl:'M',cm:56,inch:22.05,us:'7',uk:'6 7/8'},{intl:'M',cm:57,inch:22.44,us:'7 1/8',uk:'7'},
      {intl:'L',cm:58,inch:22.83,us:'7 1/4',uk:'7 1/8'},{intl:'L',cm:59,inch:23.23,us:'7 3/8',uk:'7 1/4'},
      {intl:'XL',cm:60,inch:23.62,us:'7 1/2',uk:'7 3/8'},{intl:'XL',cm:61,inch:24.02,us:'7 5/8',uk:'7 1/2'},
      {intl:'XXL',cm:62,inch:24.41,us:'7 3/4',uk:'7 5/8'},{intl:'XXL',cm:63,inch:24.80,us:'7 7/8',uk:'7 3/4'},
      {intl:'XXL',cm:64,inch:25.20,us:'8',uk:'7 7/8'}
    ];

    const ringBase=[
      [46.8,4,'H 1/2',7],[48.0,4.5,'I 1/2',8],[49.3,5,'J 1/2',9],[50.6,5.5,'K 1/2',10],
      [51.9,6,'L 1/2',11],[53.1,6.5,'M 1/2',13],[54.4,7,'N 1/2',14],[55.7,7.5,'O 1/2',15],
      [57.0,8,'P 1/2',16],[58.3,8.5,'Q 1/2',17],[59.5,9,'R 1/2',18],[60.8,9.5,'S 1/2',19],
      [62.1,10,'T 1/2',20],[63.4,10.5,'U 1/2',22],[64.6,11,'V 1/2',23],[65.9,11.5,'W 1/2',24],
      [67.2,12,'X 1/2',25],[68.5,12.5,'Y 1/2',26],[69.7,13,'Z 1/2',27]
    ];
    const ringRows=ringBase.map(([eu,us,uk,jp])=>({eu,us,uk,jp,diameter:Number((eu/Math.PI).toFixed(2))}));

    const CUNIT={
      intl:namedUnit('intl','INT','International',{hr:'Međunarodna',de:'International',it:'Internazionale',es:'Internacional'}),
      eu:namedUnit('eu','EU','EU size',{hr:'EU veličina',de:'EU-Größe',it:'Taglia EU',es:'Talla EU'}),
      us:namedUnit('us','US','US size',{hr:'US veličina',de:'US-Größe',it:'Taglia US',es:'Talla US'}),
      uk:namedUnit('uk','UK','UK size',{hr:'UK veličina',de:'UK-Größe',it:'Taglia UK',es:'Talla UK'}),
      it:namedUnit('it','IT','Italian size',{hr:'Talijanska veličina',de:'Italienische Größe',it:'Taglia italiana',es:'Talla italiana'}),
      usuk:namedUnit('usuk','US/UK','US / UK',{hr:'US / UK',de:'US / UK',it:'US / UK',es:'US / UK'}),
      chest:namedUnit('chest','cm','Chest circumference',{hr:'Opseg prsa',de:'Brustumfang',it:'Circonferenza torace',es:'Contorno de pecho'}),
      bust:namedUnit('bust','cm','Bust circumference',{hr:'Opseg grudi',de:'Brustumfang',it:'Circonferenza seno',es:'Contorno de busto'}),
      waist:namedUnit('waist','cm','Waist circumference',{hr:'Opseg struka',de:'Taillenumfang',it:'Circonferenza vita',es:'Contorno de cintura'}),
      waistIn:namedUnit('waistIn','in','Jeans waist',{hr:'Struk traperica',de:'Jeans-Bundweite',it:'Vita jeans',es:'Cintura vaqueros'}),
      age:namedUnit('age','age','Age',{hr:'Dob',de:'Alter',it:'Età',es:'Edad'}),
      height:namedUnit('height','cm','Body height',{hr:'Visina tijela',de:'Körpergröße',it:'Altezza',es:'Estatura'}),
      usk:namedUnit('usk','US','US kids',{hr:'US dječja',de:'US Kinder',it:'US bambini',es:'US niños'}),
      uka:namedUnit('uka','UK','UK age',{hr:'UK dob',de:'UK Alter',it:'UK età',es:'UK edad'})
    };

    const clothingData={
      men:{
        tops:{units:[CUNIT.intl,CUNIT.eu,CUNIT.usuk,CUNIT.chest],defaults:['intl','eu'],defaultValue:'M',rows:[
          {intl:'XS',eu:44,usuk:34,chest:86},{intl:'S',eu:46,usuk:36,chest:91},{intl:'M',eu:48,usuk:38,chest:96},
          {intl:'L',eu:50,usuk:40,chest:101},{intl:'XL',eu:52,usuk:42,chest:106},{intl:'XXL',eu:54,usuk:44,chest:111},{intl:'3XL',eu:56,usuk:46,chest:116}
        ]},
        bottoms:{units:[CUNIT.intl,CUNIT.eu,CUNIT.waistIn,CUNIT.waist],defaults:['waistIn','eu'],defaultValue:'32',rows:[
          {intl:'XS',eu:44,waistIn:28,waist:71},{intl:'S',eu:46,waistIn:30,waist:76},{intl:'M',eu:48,waistIn:32,waist:81},
          {intl:'L',eu:50,waistIn:34,waist:86},{intl:'XL',eu:52,waistIn:36,waist:91},{intl:'XXL',eu:54,waistIn:38,waist:97},{intl:'3XL',eu:56,waistIn:40,waist:102}
        ]}
      },
      women:{
        tops:{units:[CUNIT.intl,CUNIT.eu,CUNIT.us,CUNIT.uk,CUNIT.it,CUNIT.bust],defaults:['eu','us'],defaultValue:'38',rows:[
          {intl:'XXS',eu:32,us:0,uk:4,it:36,bust:76},{intl:'XS',eu:34,us:2,uk:6,it:38,bust:80},{intl:'S',eu:36,us:4,uk:8,it:40,bust:84},
          {intl:'M',eu:38,us:6,uk:10,it:42,bust:88},{intl:'L',eu:40,us:8,uk:12,it:44,bust:92},{intl:'XL',eu:42,us:10,uk:14,it:46,bust:96},{intl:'XXL',eu:44,us:12,uk:16,it:48,bust:100}
        ]},
        bottoms:{units:[CUNIT.intl,CUNIT.eu,CUNIT.us,CUNIT.uk,CUNIT.waist],defaults:['eu','us'],defaultValue:'38',rows:[
          {intl:'XXS',eu:32,us:0,uk:4,waist:60},{intl:'XS',eu:34,us:2,uk:6,waist:64},{intl:'S',eu:36,us:4,uk:8,waist:68},
          {intl:'M',eu:38,us:6,uk:10,waist:72},{intl:'L',eu:40,us:8,uk:12,waist:76},{intl:'XL',eu:42,us:10,uk:14,waist:80},{intl:'XXL',eu:44,us:12,uk:16,waist:84}
        ]},
        dresses:{units:[CUNIT.intl,CUNIT.eu,CUNIT.us,CUNIT.uk,CUNIT.it,CUNIT.bust],defaults:['eu','uk'],defaultValue:'38',rows:[
          {intl:'XXS',eu:32,us:0,uk:4,it:36,bust:76},{intl:'XS',eu:34,us:2,uk:6,it:38,bust:80},{intl:'S',eu:36,us:4,uk:8,it:40,bust:84},
          {intl:'M',eu:38,us:6,uk:10,it:42,bust:88},{intl:'L',eu:40,us:8,uk:12,it:44,bust:92},{intl:'XL',eu:42,us:10,uk:14,it:46,bust:96},{intl:'XXL',eu:44,us:12,uk:16,it:48,bust:100}
        ]}
      },
      children:{
        general:{units:[CUNIT.age,CUNIT.height,CUNIT.usk,CUNIT.uka],defaults:['height','age'],defaultValue:'128',rows:[
          {age:'2 y',height:92,usk:'2T',uka:'2 y'},{age:'3 y',height:98,usk:'3T',uka:'3 y'},{age:'4 y',height:104,usk:'4T',uka:'4 y'},
          {age:'5 y',height:110,usk:'5',uka:'5 y'},{age:'6 y',height:116,usk:'6',uka:'6 y'},{age:'7 y',height:122,usk:'7',uka:'7 y'},
          {age:'8 y',height:128,usk:'8',uka:'8 y'},{age:'9 y',height:134,usk:'10',uka:'9 y'},{age:'10 y',height:140,usk:'10/12',uka:'10 y'},
          {age:'11 y',height:146,usk:'12',uka:'11 y'},{age:'12 y',height:152,usk:'14',uka:'12 y'},{age:'13 y',height:158,usk:'14/16',uka:'13 y'},{age:'14 y',height:164,usk:'16',uka:'14 y'}
        ]}
      }
    };

    Object.assign(categories,{
      shoes:{icon:'👟',type:'table',units:U.shoes,rows:shoeRows,defaults:['eu','uk'],defaultValue:'43'},
      clothing:{icon:'👕',type:'clothing'},
      hats:{icon:'🎩',type:'table',units:U.hats,rows:hatRows,defaults:['cm','intl'],defaultValue:'58'},
      rings:{icon:'💍',type:'table',units:U.rings,rows:ringRows,defaults:['eu','us'],defaultValue:'54.4'},
      roman:{icon:'🏛️',type:'roman',units:U.roman,defaults:['arabic','roman'],defaultValue:'2026'}
    });

    const unitTranslations = {
      hr: {
        length:['Milimetar','Centimetar','Metar','Kilometar','Inč','Stopa','Jard','Milja','Nautička milja'],
        time:['Milisekunda','Sekunda','Minuta','Sat','Dan','Tjedan','Prosječni mjesec','Prosječna godina'],
        volume:['Mililitar','Centilitar','Decilitar','Litra','Kubični metar','Američka šalica','Američka tekuća unca','Američki galon','Britanski galon'],
        area:['Kvadratni milimetar','Kvadratni centimetar','Kvadratni metar','Ar','Hektar','Kvadratni kilometar','Kvadratna stopa','Kvadratni jard','Aker','Kvadratna milja'],
        mass:['Miligram','Gram','Kilogram','Metrička tona','Unca','Funta','Stone (britanska jedinica)'],
        power:['Vat','Kilovat','Megavat','Metrička konjska snaga','Mehanička konjska snaga','BTU po satu'],
        torque:['Njutn-metar','Kilonjutn-metar','Funta-stopa','Funta-inč','Kilogram-sila metar'],
        force:['Njutn','Kilonjutn','Kilogram-sila','Funta-sila'],
        data:['Bit','Bajt','Kilobit','Kilobajt','Kibibajt','Megabit','Megabajt','Mebibajt','Gigabit','Gigabajt','Gibibajt','Terabajt','Tebibajt'],
        dataRate:['Kilobita u sekundi','Megabita u sekundi','Gigabita u sekundi','Kilobajta u sekundi','Megabajta u sekundi','Gigabajta u sekundi'],
        energy:['Džul','Kilodžul','Megadžul','Vat-sat','Kilovatsat','Kalorija','Kilokalorija','Britanska toplinska jedinica'],
        speed:['Metara u sekundi','Kilometara na sat','Milja na sat','Čvor','Stopa u sekundi'],
        temperature:['Celzijev stupanj','Fahrenheitov stupanj','Kelvin'],
        pressure:['Paskal','Kilopaskal','Bar','Milibar','Funti po kvadratnom inču','Standardna atmosfera','Milimetar živina stupca'],
        fuel:['Litara na 100 km','Kilometara po litri','Američkih milja po galonu','Britanskih milja po galonu'],
        frequency:['Herc','Kiloherc','Megaherc','Gigaherc','Okretaja u minuti'],
        angle:['Stupanj','Radijan','Gradijan','Puni okret','Lučna minuta','Lučna sekunda']
      },
      de: {
        length:['Millimeter','Zentimeter','Meter','Kilometer','Zoll','Fuß','Yard','Meile','Seemeile'],
        time:['Millisekunde','Sekunde','Minute','Stunde','Tag','Woche','Durchschnittsmonat','Durchschnittsjahr'],
        volume:['Milliliter','Zentiliter','Deziliter','Liter','Kubikmeter','US-Tasse','US-Flüssigunze','US-Gallone','Imperial-Gallone'],
        area:['Quadratmillimeter','Quadratzentimeter','Quadratmeter','Ar','Hektar','Quadratkilometer','Quadratfuß','Quadratyard','Acre','Quadratmeile'],
        mass:['Milligramm','Gramm','Kilogramm','Metrische Tonne','Unze','Pfund','Stone (britische Einheit)'],
        power:['Watt','Kilowatt','Megawatt','Metrische Pferdestärke','Mechanische Pferdestärke','BTU pro Stunde'],
        torque:['Newtonmeter','Kilonewtonmeter','Pfund-Fuß','Pfund-Zoll','Kilogrammkraftmeter'],
        force:['Newton','Kilonewton','Kilogrammkraft','Pfundkraft'],
        data:['Bit','Byte','Kilobit','Kilobyte','Kibibyte','Megabit','Megabyte','Mebibyte','Gigabit','Gigabyte','Gibibyte','Terabyte','Tebibyte'],
        dataRate:['Kilobit pro Sekunde','Megabit pro Sekunde','Gigabit pro Sekunde','Kilobyte pro Sekunde','Megabyte pro Sekunde','Gigabyte pro Sekunde'],
        energy:['Joule','Kilojoule','Megajoule','Wattstunde','Kilowattstunde','Kalorie','Kilokalorie','Britische Wärmeeinheit'],
        speed:['Meter pro Sekunde','Kilometer pro Stunde','Meilen pro Stunde','Knoten','Fuß pro Sekunde'],
        temperature:['Grad Celsius','Grad Fahrenheit','Kelvin'],
        pressure:['Pascal','Kilopascal','Bar','Millibar','Pfund pro Quadratzoll','Standardatmosphäre','Millimeter-Quecksilbersäule'],
        fuel:['Liter pro 100 km','Kilometer pro Liter','US-Meilen pro Gallone','Britische Meilen pro Gallone'],
        frequency:['Hertz','Kilohertz','Megahertz','Gigahertz','Umdrehungen pro Minute'],
        angle:['Grad','Radiant','Gon','Umdrehung','Winkelminute','Winkelsekunde']
      },
      it: {
        length:['Millimetro','Centimetro','Metro','Chilometro','Pollice','Piede','Iarda','Miglio','Miglio nautico'],
        time:['Millisecondo','Secondo','Minuto','Ora','Giorno','Settimana','Mese medio','Anno medio'],
        volume:['Millilitro','Centilitro','Decilitro','Litro','Metro cubo','Tazza statunitense','Oncia fluida statunitense','Gallone statunitense','Gallone imperiale'],
        area:['Millimetro quadrato','Centimetro quadrato','Metro quadrato','Ara','Ettaro','Chilometro quadrato','Piede quadrato','Iarda quadrata','Acro','Miglio quadrato'],
        mass:['Milligrammo','Grammo','Chilogrammo','Tonnellata metrica','Oncia','Libbra','Stone (unità britannica)'],
        power:['Watt','Chilowatt','Megawatt','Cavallo vapore metrico','Cavallo vapore meccanico','BTU all’ora'],
        torque:['Newton metro','Kilonewton metro','Libbra-piede','Libbra-pollice','Chilogrammo-forza metro'],
        force:['Newton','Kilonewton','Chilogrammo-forza','Libbra-forza'],
        data:['Bit','Byte','Kilobit','Kilobyte','Kibibyte','Megabit','Megabyte','Mebibyte','Gigabit','Gigabyte','Gibibyte','Terabyte','Tebibyte'],
        dataRate:['Kilobit al secondo','Megabit al secondo','Gigabit al secondo','Kilobyte al secondo','Megabyte al secondo','Gigabyte al secondo'],
        energy:['Joule','Kilojoule','Megajoule','Wattora','Chilowattora','Caloria','Chilocaloria','Unità termica britannica'],
        speed:['Metri al secondo','Chilometri all’ora','Miglia all’ora','Nodo','Piedi al secondo'],
        temperature:['Grado Celsius','Grado Fahrenheit','Kelvin'],
        pressure:['Pascal','Kilopascal','Bar','Millibar','Libbre per pollice quadrato','Atmosfera standard','Millimetro di mercurio'],
        fuel:['Litri per 100 km','Chilometri per litro','Miglia statunitensi per gallone','Miglia britanniche per gallone'],
        frequency:['Hertz','Kilohertz','Megahertz','Gigahertz','Giri al minuto'],
        angle:['Grado','Radiante','Gradiante','Giro completo','Minuto d’arco','Secondo d’arco']
      },
      es: {
        length:['Milímetro','Centímetro','Metro','Kilómetro','Pulgada','Pie','Yarda','Milla','Milla náutica'],
        time:['Milisegundo','Segundo','Minuto','Hora','Día','Semana','Mes promedio','Año promedio'],
        volume:['Mililitro','Centilitro','Decilitro','Litro','Metro cúbico','Taza estadounidense','Onza líquida estadounidense','Galón estadounidense','Galón imperial'],
        area:['Milímetro cuadrado','Centímetro cuadrado','Metro cuadrado','Área','Hectárea','Kilómetro cuadrado','Pie cuadrado','Yarda cuadrada','Acre','Milla cuadrada'],
        mass:['Miligramo','Gramo','Kilogramo','Tonelada métrica','Onza','Libra','Stone (unidad británica)'],
        power:['Vatio','Kilovatio','Megavatio','Caballo de vapor métrico','Caballo de fuerza mecánico','BTU por hora'],
        torque:['Newton metro','Kilonewton metro','Libra-pie','Libra-pulgada','Kilogramo-fuerza metro'],
        force:['Newton','Kilonewton','Kilogramo-fuerza','Libra-fuerza'],
        data:['Bit','Byte','Kilobit','Kilobyte','Kibibyte','Megabit','Megabyte','Mebibyte','Gigabit','Gigabyte','Gibibyte','Terabyte','Tebibyte'],
        dataRate:['Kilobits por segundo','Megabits por segundo','Gigabits por segundo','Kilobytes por segundo','Megabytes por segundo','Gigabytes por segundo'],
        energy:['Julio','Kilojulio','Megajulio','Vatio-hora','Kilovatio-hora','Caloría','Kilocaloría','Unidad térmica británica'],
        speed:['Metros por segundo','Kilómetros por hora','Millas por hora','Nudo','Pies por segundo'],
        temperature:['Grado Celsius','Grado Fahrenheit','Kelvin'],
        pressure:['Pascal','Kilopascal','Bar','Milibar','Libras por pulgada cuadrada','Atmósfera estándar','Milímetro de mercurio'],
        fuel:['Litros por 100 km','Kilómetros por litro','Millas estadounidenses por galón','Millas británicas por galón'],
        frequency:['Hercio','Kilohercio','Megahercio','Gigahercio','Revoluciones por minuto'],
        angle:['Grado','Radián','Gradián','Vuelta completa','Minuto de arco','Segundo de arco']
      }
    };

    const state = {language:'en', theme:'dark', category:'length', lastEdited:'from', clothingProfile:'men', clothingGarment:'tops'};
    const els = Object.fromEntries(['categoryStrip','categoryTitle','categoryNote','inputValue','outputValue','fromUnit','toUnit','swapButton','copyButton','clearButton','resultsGrid','equation','languageSelect','themeButton','infoButton','infoDialog','closeInfo','toast','specialControls','profileGroup','profileSelect','profileLabel','garmentGroup','garmentSelect','garmentLabel','comparisonPanel','comparisonTitle','comparisonNote','comparisonHead','comparisonBody'].map(id=>[id,document.getElementById(id)]));

    function t(key){ return key.split('.').reduce((obj,k)=>obj?.[k], translations[state.language]) ?? key; }

    function applyTheme(){
      document.documentElement.dataset.theme=state.theme;
      const targetKey=state.theme==='dark'?'switchLight':'switchDark';
      els.themeButton.setAttribute('aria-label',t(targetKey));
      els.themeButton.title=t(targetKey);
      const themeMeta=document.querySelector('meta[name="theme-color"]');
      if(themeMeta) themeMeta.content=state.theme==='dark'?'#071b2b':'#f4fbff';
    }

    function activeCategory(){
      if(state.category!=='clothing') return categories[state.category];
      const profile=state.clothingProfile;
      const garment=profile==='children'?'general':state.clothingGarment;
      const data=clothingData[profile][garment] || clothingData[profile].tops || clothingData.children.general;
      return {...categories.clothing,type:'table',...data};
    }
    function isSizeCategory(){ return ['shoes','clothing','hats','rings'].includes(state.category); }
    function normalizeText(value){ return String(value??'').trim().toUpperCase().replace(/\s+/g,' '); }
    function sizeDisplay(value){
      if(value===undefined || value===null || value==='') return '—';
      if(typeof value==='number') return new Intl.NumberFormat(state.language,{maximumFractionDigits:2,useGrouping:false}).format(value);
      return String(value);
    }
    function currentRows(){ return activeCategory().rows || []; }
    function findSizeRow(value,unitId){
      const rows=currentRows();
      if(!rows.length) return null;
      const numeric=parseNumber(value);
      const numericColumn=rows.some(r=>typeof r[unitId]==='number');
      if(numericColumn && Number.isFinite(numeric)){
        return rows.reduce((best,row)=>{
          if(typeof row[unitId]!=='number') return best;
          if(!best) return row;
          return Math.abs(row[unitId]-numeric)<Math.abs(best[unitId]-numeric)?row:best;
        },null);
      }
      const wanted=normalizeText(value);
      return rows.find(r=>normalizeText(r[unitId])===wanted) || null;
    }
    function romanFromArabic(num){
      if(!Number.isInteger(num)||num<1||num>3999) return null;
      const map=[['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]];
      let out='';
      for(const [symbol,value] of map){ while(num>=value){ out+=symbol; num-=value; } }
      return out;
    }
    function arabicFromRoman(value){
      const roman=normalizeText(value);
      if(!/^[MDCLXVI]+$/.test(roman)) return null;
      const values={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
      let total=0;
      for(let i=0;i<roman.length;i++){ const cur=values[roman[i]],next=values[roman[i+1]]||0; total+=cur<next?-cur:cur; }
      if(total<1||total>3999||romanFromArabic(total)!==roman) return null;
      return total;
    }
    function setupSpecialControls(){
      const clothing=state.category==='clothing';
      els.specialControls.hidden=!clothing;
      els.profileGroup.hidden=!clothing;
      els.garmentGroup.hidden=!clothing || state.clothingProfile==='children';
      if(!clothing) return;
      els.profileLabel.textContent=t('profile');
      els.garmentLabel.textContent=t('garment');
      els.profileSelect.innerHTML=[['men','men'],['women','women'],['children','children']].map(([v,k])=>`<option value="${v}">${t(k)}</option>`).join('');
      els.profileSelect.value=state.clothingProfile;
      const garmentKeys=state.clothingProfile==='women'?['tops','bottoms','dresses']:['tops','bottoms'];
      if(state.clothingProfile!=='women' && state.clothingGarment==='dresses') state.clothingGarment='tops';
      els.garmentSelect.innerHTML=garmentKeys.map(k=>`<option value="${k}">${t(k)}</option>`).join('');
      els.garmentSelect.value=state.clothingGarment;
    }
    function setInputMode(){
      const cat=activeCategory();
      const from=getUnit(els.fromUnit.value),to=getUnit(els.toUnit.value);
      const roman=state.category==='roman';
      const rows=cat.rows||[];
      const sourceNumeric=!roman && rows.length ? rows.some(r=>typeof r[from?.id]==='number') : !roman;
      const targetNumeric=!roman && rows.length ? rows.some(r=>typeof r[to?.id]==='number') : !roman;
      els.inputValue.inputMode=sourceNumeric?'decimal':'text';
      els.outputValue.inputMode=targetNumeric?'decimal':'text';
      els.inputValue.autocapitalize=roman?'characters':'off';
      els.outputValue.autocapitalize=roman?'characters':'off';
    }

    function localize(){
      document.documentElement.lang=state.language;
      document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
      els.languageSelect.value=state.language;
      els.languageSelect.setAttribute('aria-label',t('language'));
      els.categoryStrip.setAttribute('aria-label',t('categoryNav'));
      els.fromUnit.setAttribute('aria-label',t('fromUnit'));
      els.toUnit.setAttribute('aria-label',t('toUnit'));
      els.infoButton.setAttribute('aria-label',t('info'));
      applyTheme();
      els.closeInfo.setAttribute('aria-label',t('close'));
      els.swapButton.setAttribute('aria-label',t('swap')); els.swapButton.title=t('swap');
      els.copyButton.setAttribute('aria-label',t('copy')); els.copyButton.title=t('copy');
      els.comparisonTitle.textContent=t('sizeComparison');
      els.comparisonNote.textContent=t('sizeNote');
      document.title=`${t('appTitle')} | Apps & Games`;
      setupSpecialControls(); renderCategories(); renderCategory(false); convert();
    }

    function renderCategories(){
      els.categoryStrip.innerHTML='';
      Object.entries(categories).forEach(([key,cat])=>{
        const button=document.createElement('button'); button.type='button'; button.className=`category-button${key===state.category?' active':''}`;
        button.innerHTML=`<span class="emoji" aria-hidden="true">${cat.icon}</span><span>${t('categories.'+key)}</span>`;
        button.setAttribute('aria-pressed',key===state.category); button.onclick=()=>setCategory(key);
        els.categoryStrip.appendChild(button);
      });
      requestAnimationFrame(()=>els.categoryStrip.querySelector('.active')?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'}));
    }

    function renderCategory(resetUnits=true){
      const cat=activeCategory();
      els.categoryTitle.textContent=`${cat.icon} ${t('categories.'+state.category)}`;
      els.categoryNote.textContent=t(`notes.${state.category}`).startsWith('notes.') ? '' : t(`notes.${state.category}`);
      setupSpecialControls();
      const oldFrom=els.fromUnit.value, oldTo=els.toUnit.value;
      const options=cat.units.map(u=>`<option value="${u.id}">${unitName(u)} (${u.symbol})</option>`).join('');
      els.fromUnit.innerHTML=options; els.toUnit.innerHTML=options;
      if(resetUnits){ [els.fromUnit.value,els.toUnit.value]=cat.defaults; }
      else {
        els.fromUnit.value=cat.units.some(u=>u.id===oldFrom)?oldFrom:cat.defaults[0];
        els.toUnit.value=cat.units.some(u=>u.id===oldTo)?oldTo:cat.defaults[1];
      }
      setInputMode();
    }

    function setCategory(key){ state.category=key; state.lastEdited='from'; renderCategories(); renderCategory(true); els.inputValue.value=activeCategory().defaultValue ?? '1'; els.outputValue.value=''; convert('from'); }
    function parseNumber(value){ const normalized=String(value).trim().replace(/\s/g,'').replace(',','.'); return normalized===''?NaN:Number(normalized); }
    function formatNumber(value){
      if(!Number.isFinite(value)) return '—';
      if(Object.is(value,-0)) value=0;
      const abs=Math.abs(value);
      if((abs>=1e12)||(abs>0&&abs<1e-7)) return value.toExponential(8).replace(/\.?(0+)(?=e)/,'');
      return new Intl.NumberFormat(state.language,{maximumSignificantDigits:12,maximumFractionDigits:10,useGrouping:false}).format(value);
    }

    function getUnit(id){ return activeCategory().units.find(u=>u.id===id); }
    function unitName(unit){
      if(unit.names?.[state.language]) return unit.names[state.language];
      const cat=activeCategory();
      const index=cat.units.indexOf(unit);
      return unitTranslations[state.language]?.[state.category]?.[index] ?? unit.name;
    }
    function calculate(value,from,to){
      if(activeCategory().type==='table'){
        const row=findSizeRow(value,from.id);
        return row ? row[to.id] : null;
      }
      if(state.category==='fuel' && value===0) return NaN;
      if(Number.isFinite(from.factor) && Number.isFinite(to.factor)) return value*(from.factor/to.factor);
      return to.fromBase(from.toBase(value));
    }

    function convert(direction=state.lastEdited){
      state.lastEdited=direction;
      const cat=activeCategory();
      const from=getUnit(els.fromUnit.value); const to=getUnit(els.toUnit.value);
      const sourceElement=direction==='to'?els.outputValue:els.inputValue;
      const targetElement=direction==='to'?els.inputValue:els.outputValue;
      const sourceUnit=direction==='to'?to:from;
      const targetUnit=direction==='to'?from:to;

      if(state.category==='roman'){
        const raw=String(sourceElement.value).trim();
        let result=null;
        if(sourceUnit.id==='arabic' && targetUnit.id==='roman'){
          const n=parseNumber(raw); result=Number.isInteger(n)?romanFromArabic(n):null;
        } else if(sourceUnit.id==='roman' && targetUnit.id==='arabic') result=arabicFromRoman(raw);
        else if(sourceUnit.id==='arabic') { const n=parseNumber(raw); result=Number.isInteger(n)&&n>=1&&n<=3999?n:null; }
        else { const n=arabicFromRoman(raw); result=n?romanFromArabic(n):null; }
        if(result===null){ targetElement.value=''; els.equation.textContent=t('invalid')+' · 1–3999'; els.resultsGrid.innerHTML=''; renderComparison(null); return; }
        targetElement.value=String(result);
        const left=direction==='to'?String(result):raw.toUpperCase();
        const right=direction==='to'?raw.toUpperCase():String(result);
        els.equation.innerHTML=`<strong>${left}</strong> = <strong>${right}</strong>`;
        els.resultsGrid.innerHTML=''; renderComparison(null); setInputMode(); return;
      }

      if(cat.type==='table'){
        const raw=sourceElement.value;
        const row=findSizeRow(raw,sourceUnit.id);
        if(!row){ targetElement.value=''; els.equation.textContent=t('invalid'); els.resultsGrid.innerHTML=''; renderComparison(null); return; }
        const result=row[targetUnit.id];
        targetElement.value=sizeDisplay(result);
        const sourceShown=sizeDisplay(row[sourceUnit.id]);
        const targetShown=sizeDisplay(result);
        const approx=normalizeText(raw)!==normalizeText(sourceShown)?` <span class="approx-badge">${t('approx')}</span>`:'';
        els.equation.innerHTML=`<strong>${sourceShown} ${sourceUnit.symbol}</strong> = <strong>${targetShown} ${targetUnit.symbol}</strong>${approx}`;
        renderQuickResults(row,sourceUnit,targetUnit); renderComparison(row); setInputMode(); return;
      }

      const value=parseNumber(sourceElement.value);
      if(!from||!to||!Number.isFinite(value)){
        targetElement.value=''; els.equation.textContent=t('invalid'); els.resultsGrid.innerHTML=''; renderComparison(null); return;
      }
      const result=calculate(value,sourceUnit,targetUnit); const formatted=formatNumber(result); targetElement.value=formatted;
      const leftValue=direction==='to'?formatted:formatNumber(value);
      const rightValue=direction==='to'?formatNumber(value):formatted;
      els.equation.innerHTML=`<strong>${leftValue} ${from.symbol}</strong> = <strong>${rightValue} ${to.symbol}</strong>`;
      renderQuickResults(value,sourceUnit,targetUnit); renderComparison(null); setInputMode();
    }

    function renderQuickResults(value,from,to){
      const cat=activeCategory();
      const units=cat.units.filter(u=>u.id!==from.id&&u.id!==to.id).slice(0,6);
      if(cat.type==='table'){
        els.resultsGrid.innerHTML=units.map(unit=>`<div class="result-chip" title="${unitName(unit)}"><span class="result-number">${sizeDisplay(value[unit.id])}</span><span class="result-unit">${unitName(unit)} · ${unit.symbol}</span></div>`).join('');
        return;
      }
      els.resultsGrid.innerHTML=units.map(unit=>`<div class="result-chip" title="${unitName(unit)}"><span class="result-number">${formatNumber(calculate(value,from,unit))}</span><span class="result-unit">${unitName(unit)} · ${unit.symbol}</span></div>`).join('');
    }

    function renderComparison(selectedRow){
      const cat=activeCategory();
      const show=isSizeCategory() && cat.type==='table';
      els.comparisonPanel.hidden=!show;
      if(!show){ els.comparisonHead.innerHTML=''; els.comparisonBody.innerHTML=''; return; }
      els.comparisonTitle.textContent=t('sizeComparison');
      els.comparisonNote.textContent=t('sizeNote');
      els.comparisonHead.innerHTML='<tr>'+cat.units.map(u=>`<th>${unitName(u)}<br><span style="color:var(--muted);font-weight:600">${u.symbol}</span></th>`).join('')+'</tr>';
      if(!selectedRow){ els.comparisonBody.innerHTML=''; return; }
      const rows=cat.rows; const index=rows.indexOf(selectedRow); const start=Math.max(0,index-1),end=Math.min(rows.length,index+2);
      els.comparisonBody.innerHTML=rows.slice(start,end).map(row=>`<tr class="${row===selectedRow?'selected-size':''}">${cat.units.map(u=>`<td>${sizeDisplay(row[u.id])}</td>`).join('')}</tr>`).join('');
    }

    function showToast(message){ els.toast.textContent=message; els.toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>els.toast.classList.remove('show'),1800); }
    els.inputValue.addEventListener('input',()=>convert('from')); els.outputValue.addEventListener('input',()=>convert('to'));
    els.fromUnit.addEventListener('change',()=>{setInputMode();convert();}); els.toUnit.addEventListener('change',()=>{setInputMode();convert();});
    els.profileSelect.addEventListener('change',()=>{state.clothingProfile=els.profileSelect.value;if(state.clothingProfile!=='women'&&state.clothingGarment==='dresses')state.clothingGarment='tops';renderCategory(true);els.inputValue.value=activeCategory().defaultValue;convert('from');});
    els.garmentSelect.addEventListener('change',()=>{state.clothingGarment=els.garmentSelect.value;renderCategory(true);els.inputValue.value=activeCategory().defaultValue;convert('from');});
    els.swapButton.addEventListener('click',()=>{
      const unit=els.fromUnit.value; els.fromUnit.value=els.toUnit.value; els.toUnit.value=unit;
      const value=els.inputValue.value; els.inputValue.value=els.outputValue.value; els.outputValue.value=value;
      state.lastEdited=state.lastEdited==='from'?'to':'from'; setInputMode(); convert();
    });
    els.clearButton.addEventListener('click',()=>{ els.inputValue.value=''; els.outputValue.value=''; state.lastEdited='from'; els.equation.textContent=''; els.resultsGrid.innerHTML=''; renderComparison(null); els.inputValue.focus(); });
    els.copyButton.addEventListener('click',async()=>{ if(!els.outputValue.value)return; const suffix=state.category==='roman'?'':` ${getUnit(els.toUnit.value).symbol}`; try{await navigator.clipboard.writeText(`${els.outputValue.value}${suffix}`); showToast(t('copied'));}catch{els.outputValue.select();document.execCommand('copy');showToast(t('copied'));} });
    document.querySelectorAll('[data-copy-wallet]').forEach(button=>button.addEventListener('click',async()=>{
      const address=button.closest('.wallet')?.querySelector('code')?.textContent?.trim();
      if(!address)return;
      try{
        await navigator.clipboard.writeText(address);
      }catch{
        const area=document.createElement('textarea'); area.value=address; area.style.position='fixed'; area.style.opacity='0';
        document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove();
      }
      button.textContent=t('copyWalletDone');
      showToast(t('copyWalletDone'));
      setTimeout(()=>button.textContent=t('copyWallet'),1000);
    }));
    els.languageSelect.addEventListener('change',e=>{state.language=e.target.value; localStorage.setItem('unitConverterLanguage',state.language); localize();});
    els.themeButton.addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';localStorage.setItem('unitConverterTheme',state.theme);applyTheme();});
    els.infoButton.addEventListener('click',()=>els.infoDialog.showModal()); els.closeInfo.addEventListener('click',()=>els.infoDialog.close());
    els.infoDialog.addEventListener('click',e=>{const r=els.infoDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)els.infoDialog.close();});
    document.getElementById('year').textContent=new Date().getFullYear();
    const savedLanguage=localStorage.getItem('unitConverterLanguage'); if(translations[savedLanguage]) state.language=savedLanguage;
    const savedTheme=localStorage.getItem('unitConverterTheme'); if(savedTheme==='light'||savedTheme==='dark') state.theme=savedTheme;
    localize();
