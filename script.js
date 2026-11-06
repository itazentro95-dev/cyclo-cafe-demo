/* Cyclo Café · language toggle, poster-wall parallax, peloton gallery
   curve, scroll reveal, open-now indicator.
   French is the default and is fully present in the HTML:
   with JavaScript disabled, the complete French site remains visible. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var I18N = {
    fr: {
      title: "Cyclo Café · Burgers, bières & bicyclettes à Fribourg",
      skip: "Aller à la carte",
      brandSub: "Fribourg · Pérolles",
      navMenu: "La carte", navGallery: "Le peloton", navStory: "L’esprit vélo", navVisit: "Visite",
      callBtn: "Appeler",
      heroEyebrow: "Café vélophile, boulevard de Pérolles, Fribourg",
      h1a: "Burgers,", h1b: "bières &", h1c: "bicyclettes.",
      heroLede: "Cafés et boissons fraîches toute la journée, burgers, frites maison et salades midi et soir : le QG des étudiants, face à l’université, dans un décor où tout tourne autour du vélo.",
      badgeRating: "4,9 · 108 avis Google", badgeTerrace: "Terrasse sur le boulevard", badgeTakeaway: "À emporter",
      ctaMenu: "Voir la carte", ctaCall: "Réserver : 026 322 02 28",
      posterChip: "Servi avec frites maison & salade", badgeSub: "avis Google",
      fact1t: "Face à l’université", fact1: "Bd de Pérolles 91, la faculté est au n° 90",
      fact2t: "Midi : ça roule vite", fact2: "Bondé à l’heure de pointe, mieux vaut réserver",
      fact3t: "Végé & vegan", fact3: "Burgers végétariens, vegan, petits formats",
      fact4t: "Ouvert tard", fact4: "Jusqu’à 23h30, minuit le week-end",
      mq1: "Frites maison", mq2: "Sauce tartare maison", mq3: "Burgers végé & vegan",
      mq4: "Bières artisanales", mq5: "Terrasse", mq6: "Jusqu’à minuit ven. & sam.",
      menuKicker: "La carte", menuTitle: "Trois étapes, aucune côte.",
      menuSub: "La carte du Cyclo, enfin en ligne, pas seulement sur Facebook. Midi et soir, du premier café au dernier verre.",
      priceNote: "Prix affichés au comptoir : appelez pour la carte du jour.",
      st1Tag: "Étape 01 · L’étape reine", st1Title: "Les burgers",
      sig1Name: "Le Fribourg", sig1Desc: "Au vacherin fribourgeois fondu : le local de l’étape.",
      flagGuest: "Chouchou des clients",
      sig2Name: "L’Italy", sig2Desc: "Mozzarella di bufala, comme un air de Giro.",
      sig3Name: "Le Fermier", sig3Desc: "Bacon croustillant, esprit ferme et grand air.",
      sig4Name: "Le Chilly Indian", sig4Desc: "La version relevée aux épices, pour les grimpeurs.",
      sigNote: "Et toute la bande : burgers végétariens, burger vegan, petits formats et option sans gluten. Chaque burger part avec frites maison et salade.",
      st2Tag: "Étape 02 · Le ravitaillement", st2Title: "À côté",
      m21: "Frites maison", m21d: "Dorées et généreuses : celles dont tout le monde parle.",
      m22: "Sauce tartare maison", m22d: "La signature du comptoir, faite ici.",
      m23: "Salades fraîches", m23d: "Dont la salade au poulet, bien garnie.",
      m24: "Soupes", m24d: "Le bol qui réchauffe entre deux cours.",
      m25: "Paninis & sandwichs chauds", m25d: "Pour les sprints entre deux auditoires.",
      st3Tag: "Étape 03 · Du matin au soir", st3Title: "Le bar & les cafés",
      m31: "Cafés, toute la journée", m31d: "Dès 8h, avant le premier cours ou après le dernier.",
      m32: "Bières artisanales", m32d: "Dont la Cyclo IPA, citée par les clients.",
      flagGuest2: "Chouchou des clients",
      m33: "Cocktails & boissons fraîches", m33d: "Avec ou sans alcool, du matin au bout de la nuit.",
      m34: "Vins", m34d: "Une sélection pour accompagner l’étape du soir.",
      menuCta: "Réserver : 026 322 02 28", menuTakeaway: "À emporter aussi : les burgers voyagent très bien.",
      galKicker: "Galerie", galTitle: "Le peloton, en images.",
      galSub: "Faites glisser : la salle, la terrasse et l’assiette : l’ambiance qui fait revenir les anciens étudiants.",
      cap1: "La salle : tout est vélo.", cap2: "La terrasse, sur le boulevard.",
      cap3: "Frites maison, tartare maison.", cap4: "L’étape du soir, au comptoir.",
      cap5: "Le café du matin, dès 8h.", swipeHint: "← Balayez pour faire défiler →",
      storyKicker: "L’esprit vélo", storyTitle: "Un bistrot rétro qui roule au rythme de l’université.",
      storyP1: "Ici, tout tourne autour du vélo : c’est la première chose que les clients racontent. Cadres vintage, selles en cuir et roues au mur composent un bistrot rétro et vivant, posé sur le boulevard de Pérolles, le plateau des étudiants de Fribourg.",
      storyP2: "Le midi, la salle se remplit entre deux cours ; le soir, on refait la journée autour d’une IPA. Et les anciens reviennent, des années après leur diplôme, « pour montrer le meilleur restaurant de Fribourg », sans être déçus.",
      chip1: "Sur le boulevard depuis 2019 (registre du commerce)",
      chip2: "Fribourg, ville-pont entre français et allemand",
      chip3: "Terrasse dès les beaux jours",
      chip4: "Le QG des ~10 000 étudiants de l’université",
      revKicker: "Avis", revTitle: "La voix du peloton.",
      rev1: "« Les burgers sont toujours excellents, on y mangeait déjà quand on était étudiants, il y a dix ans. »", rev1By: "Avis Google",
      rev2: "« Les bières sont excellentes, la Cyclo IPA vaut particulièrement le détour. »", rev2By: "Avis TripAdvisor",
      rev3: "« Un lieu culte où se retrouvent les étudiants du quartier. »", rev3By: "Avis Google",
      revNote: "Extraits adaptés d’avis publics (Google, TripAdvisor). Note Google : 4,9/5 · 108 avis.",
      visitKicker: "Visite", visitTitle: "Ravitaillement : Pérolles 91.",
      addrLabel: "Adresse", dirBtn: "Itinéraire Google Maps",
      phoneLabel: "Téléphone", followLabel: "Suivre la maison",
      fbBtn: "Facebook · @cyclocafefr",
      prac1: "Terrasse", prac2: "À emporter", prac3: "Réservations par téléphone",
      prac4: "Options végé & vegan", prac5: "Accessible en fauteuil",
      hoursTitle: "Heures d’ouverture",
      day1: "Du lundi au jeudi", day2: "Vendredi", day3: "Samedi", day4: "Dimanche", closed: "Fermé",
      satNote: "Le samedi, l’heure d’ouverture varie selon les sources (9h ou 10h) : un coup de fil avant de partir, et c’est réglé.",
      openNowT: "Ouvert maintenant · ferme à {x}", closedT: "Fermé · ouvre à {x}",
      footLine: "Boulevard de Pérolles 91, 1700 Fribourg · 026 322 02 28",
      footNote: "Informations issues des profils publics de l’établissement (Google, local.ch, TripAdvisor, novembre 2026).",
      footDemo: "Site de démonstration : visuels d’ambiance générés ; à la mise en ligne, ils cèdent la place aux photos de la maison.",
      barCall: "Appeler", barMenu: "La carte", barDir: "Itinéraire"
    },
    en: {
      title: "Cyclo Café · Burgers, beers & bicycles in Fribourg",
      skip: "Skip to the menu",
      brandSub: "Fribourg · Pérolles",
      navMenu: "The menu", navGallery: "The peloton", navStory: "The cycling spirit", navVisit: "Visit",
      callBtn: "Call",
      heroEyebrow: "Cycling-mad café, Boulevard de Pérolles, Fribourg",
      h1a: "Burgers,", h1b: "beers &", h1c: "bicycles.",
      heroLede: "Coffee and fresh drinks all day, burgers, homemade fries and salads at lunch and dinner: the students’ HQ, right opposite the university, in a room where everything revolves around the bicycle.",
      badgeRating: "4.9 · 108 Google reviews", badgeTerrace: "Terrace on the boulevard", badgeTakeaway: "Takeaway",
      ctaMenu: "See the menu", ctaCall: "Book: 026 322 02 28",
      posterChip: "Served with homemade fries & salad", badgeSub: "Google reviews",
      fact1t: "Opposite the university", fact1: "Bd de Pérolles 91, the faculty is at no. 90",
      fact2t: "Lunch moves fast", fact2: "Packed at peak time, booking helps",
      fact3t: "Veggie & vegan", fact3: "Vegetarian and vegan burgers, small sizes too",
      fact4t: "Open late", fact4: "Until 11:30 pm, midnight at weekends",
      mq1: "Homemade fries", mq2: "Homemade tartar sauce", mq3: "Veggie & vegan burgers",
      mq4: "Craft beers", mq5: "Terrace", mq6: "Until midnight Fri & Sat",
      menuKicker: "The menu", menuTitle: "Three stages, no climbs.",
      menuSub: "The Cyclo menu, finally online, not only on Facebook. Lunch and dinner, from the first coffee to the last glass.",
      priceNote: "Prices are shown at the counter. Call for today’s menu.",
      st1Tag: "Stage 01 · The queen stage", st1Title: "The burgers",
      sig1Name: "Le Fribourg", sig1Desc: "With melted Vacherin fribourgeois, the local hero.",
      flagGuest: "Guests’ favourite",
      sig2Name: "L’Italy", sig2Desc: "Buffalo mozzarella, with a hint of the Giro.",
      sig3Name: "Le Fermier", sig3Desc: "Crispy bacon, farmhouse spirit, fresh air.",
      sig4Name: "Le Chilly Indian", sig4Desc: "The spiced-up one, for the climbers.",
      sigNote: "And the whole bunch: vegetarian burgers, a vegan burger, small sizes and a gluten-free option. Every burger leaves with homemade fries and salad.",
      st2Tag: "Stage 02 · The feed zone", st2Title: "On the side",
      m21: "Homemade fries", m21d: "Golden and generous, the ones everyone talks about.",
      m22: "Homemade tartar sauce", m22d: "The counter’s signature, made right here.",
      m23: "Fresh salads", m23d: "Including the chicken salad, generously filled.",
      m24: "Soups", m24d: "The bowl that warms you up between lectures.",
      m25: "Paninis & hot sandwiches", m25d: "For sprints between two lecture halls.",
      st3Tag: "Stage 03 · Morning to night", st3Title: "The bar & the coffees",
      m31: "Coffee, all day", m31d: "From 8 am, before the first lecture or after the last.",
      m32: "Craft beers", m32d: "Including the Cyclo IPA, singled out by guests.",
      flagGuest2: "Guests’ favourite",
      m33: "Cocktails & fresh drinks", m33d: "With or without alcohol, from morning to late.",
      m34: "Wines", m34d: "A selection to go with the evening stage.",
      menuCta: "Book: 026 322 02 28", menuTakeaway: "Takeaway too: the burgers travel very well.",
      galKicker: "Gallery", galTitle: "The peloton, in pictures.",
      galSub: "Swipe through: the room, the terrace and the plate: the atmosphere that brings former students back.",
      cap1: "The room: everything is bicycle.", cap2: "The terrace, on the boulevard.",
      cap3: "Homemade fries, homemade tartar.", cap4: "The evening stage, at the counter.",
      cap5: "Morning coffee, from 8 am.", swipeHint: "← Swipe to scroll →",
      storyKicker: "The cycling spirit", storyTitle: "A retro bistro rolling to the university’s rhythm.",
      storyP1: "Here, everything revolves around the bicycle: it’s the first thing guests talk about. Vintage frames, leather saddles and wheels on the walls make a lively retro bistro, set on Boulevard de Pérolles, Fribourg’s student plateau.",
      storyP2: "At midday the room fills up between lectures; in the evening the day is replayed over an IPA. And alumni come back, years after graduating, “to show them the best restaurant in Fribourg”, and are not disappointed.",
      chip1: "On the boulevard since 2019 (trade register)",
      chip2: "Fribourg, bridge city between French and German",
      chip3: "Terrace as soon as the sun is out",
      chip4: "HQ of the university’s ~10,000 students",
      revKicker: "Reviews", revTitle: "The voice of the peloton.",
      rev1: "“The burgers are always excellent, we already ate here as students, ten years ago.”", rev1By: "Google review",
      rev2: "“The beers are excellent, the Cyclo IPA is particularly worth the detour.”", rev2By: "TripAdvisor review",
      rev3: "“A cult place where the neighbourhood’s students gather.”", rev3By: "Google review",
      revNote: "Adapted excerpts from public reviews (Google, TripAdvisor). Google rating: 4.9/5 · 108 reviews.",
      visitKicker: "Visit", visitTitle: "Feed zone: Pérolles 91.",
      addrLabel: "Address", dirBtn: "Directions on Google Maps",
      phoneLabel: "Phone", followLabel: "Follow the house",
      fbBtn: "Facebook · @cyclocafefr",
      prac1: "Terrace", prac2: "Takeaway", prac3: "Bookings by phone",
      prac4: "Veggie & vegan options", prac5: "Wheelchair accessible",
      hoursTitle: "Opening hours",
      day1: "Monday to Thursday", day2: "Friday", day3: "Saturday", day4: "Sunday", closed: "Closed",
      satNote: "Saturday’s opening time varies by source (9 or 10 am): a quick call before you set off settles it.",
      openNowT: "Open now · closes at {x}", closedT: "Closed · opens at {x}",
      footLine: "Boulevard de Pérolles 91, 1700 Fribourg · 026 322 02 28",
      footNote: "Information from the establishment’s public profiles (Google, local.ch, TripAdvisor, November 2026).",
      footDemo: "Demonstration website: generated atmospheric visuals; at launch they give way to the house’s own photos.",
      barCall: "Call", barMenu: "Menu", barDir: "Directions"
    }
  };

  var LANG = "fr";
  try { LANG = localStorage.getItem("cyclo-lang") || "fr"; } catch (e) {}
  if (!I18N[LANG]) LANG = "fr";

  function applyLang(lang) {
    LANG = lang;
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict.title;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) nodes[i].textContent = dict[key];
    }
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle("is-on", btns[j].getAttribute("data-lang") === lang);
    }
    try { localStorage.setItem("cyclo-lang", lang); } catch (e) {}
    renderOpenNow();
  }

  var langBtns = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener("click", function () {
      applyLang(this.getAttribute("data-lang"));
    });
  }

  /* ---------- open-now (printed hours, Europe/Zurich) ---------- */
  var HOURS = { 1: [480, 1410], 2: [480, 1410], 3: [480, 1410], 4: [480, 1410], 5: [480, 1440], 6: [540, 1440], 0: null };
  function renderOpenNow() {
    var el = document.getElementById("openNow");
    if (!el) return;
    try {
      var parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Zurich", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false
      }).formatToParts(new Date());
      var wd = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var day = null, mins = null;
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].type === "weekday") day = wd[parts[i].value];
        if (parts[i].type === "hour") mins = parseInt(parts[i].value, 10) * 60;
        if (parts[i].type === "minute") mins += parseInt(parts[i].value, 10);
      }
      var dict = I18N[LANG], text = null;
      var today = HOURS[day];
      if (today && mins >= today[0] && mins < today[1]) {
        var c = today[1] >= 1440 ? "00:00" : String(Math.floor(today[1] / 60)).padStart(2, "0") + ":" + String(today[1] % 60).padStart(2, "0");
        text = dict.openNowT.replace("{x}", c);
      } else {
        for (var k = 0; k < 8; k++) {
          var d = (day + k) % 7, h = HOURS[d];
          if (h && (k > 0 || mins < h[0])) {
            var o = String(Math.floor(h[0] / 60)).padStart(2, "0") + ":" + String(h[0] % 60).padStart(2, "0");
            text = dict.closedT.replace("{x}", o);
            break;
          }
        }
      }
      if (text) { el.textContent = "● " + text; el.hidden = false; }
    } catch (e) { /* indicator is progressive enhancement only */ }
  }

  /* ---------- reveal ---------- */
  var RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rvEls = document.querySelectorAll(".rv");
  if (RM || !("IntersectionObserver" in window)) {
    for (var r = 0; r < rvEls.length; r++) rvEls[r].classList.add("in");
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    for (var q = 0; q < rvEls.length; q++) io.observe(rvEls[q]);
  }

  /* ---------- depth: poster parallax + road line + peloton curve ---------- */
  var plx = document.querySelectorAll("[data-plx]");
  var road = document.querySelector(".roadline-inner");
  var track = document.getElementById("peloton");
  var cards = track ? track.querySelectorAll(".p-card") : [];
  var px = 0, py = 0, tx = 0, ty = 0;

  if (!RM) {
    if (window.matchMedia("(pointer: fine)").matches) {
      document.getElementById("hero").addEventListener("pointermove", function (e) {
        var r = this.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width - 0.5);
        ty = ((e.clientY - r.top) / r.height - 0.5);
      }, { passive: true });
    }
    var tick = function () {
      px += (tx - px) * 0.06; py += (ty - py) * 0.06;
      var sc = window.scrollY || 0;
      for (var i = 0; i < plx.length; i++) {
        var depth = parseFloat(plx[i].getAttribute("data-plx")) || 1;
        var y = -sc * 0.06 * depth + py * 14 * depth;
        var x = px * 16 * depth;
        plx[i].style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
      }
      if (road) road.style.transform = "translateY(" + (-(sc * 0.55) % 52) + "px)";
      if (track) {
        var tr = track.getBoundingClientRect();
        if (tr.top < window.innerHeight && tr.bottom > 0) {
          var centre = tr.left + tr.width / 2;
          for (var c = 0; c < cards.length; c++) {
            var cr = cards[c].getBoundingClientRect();
            var ratio = (cr.left + cr.width / 2 - centre) / tr.width;
            ratio = Math.max(-1, Math.min(1, ratio));
            cards[c].style.transform = "rotateY(" + (ratio * -8).toFixed(2) + "deg) scale(" + (1 - Math.abs(ratio) * 0.045).toFixed(3) + ")";
          }
        }
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  applyLang(LANG);
})();
