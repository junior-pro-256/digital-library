(function () {
  "use strict";

  /* ---------- Sample catalogue ---------- */
  var CATS = {
    "Programming": 215, "Web Development": 170, "Software Engineering": 20,
    "Databases": 285, "Research Methods": 340, "Systems & Networks": 135
  };
  var BOOKS = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", cat: "Programming", year: 2008, edition: "1st edition", publisher: "Prentice Hall", call: "005.1 MAR", shelf: "Level 2, aisle C4", total: 5, avail: 3, tags: "refactoring readability craftsmanship", desc: "A practical guide to writing code other people can read and change. Uses worked examples to show how naming, small functions and tests keep a codebase healthy." },
    { id: 2, title: "Python Crash Course", author: "Eric Matthes", cat: "Programming", year: 2023, edition: "3rd edition", publisher: "No Starch Press", call: "005.133 MAT", shelf: "Level 2, aisle C2", total: 6, avail: 4, tags: "python beginner projects games", desc: "A project-based introduction to Python. Covers the language fundamentals first, then builds a game, a data visualisation and a small web app." },
    { id: 3, title: "The Pragmatic Programmer", author: "David Thomas, Andrew Hunt", cat: "Programming", year: 2019, edition: "20th anniversary edition", publisher: "Addison-Wesley", call: "005.1 THO", shelf: "Level 2, aisle C4", total: 3, avail: 0, tags: "career habits tools debugging", desc: "Short, self-contained lessons on the habits that separate working developers from great ones, from debugging to automating repetitive work." },
    { id: 4, title: "Introduction to Algorithms", author: "Thomas H. Cormen et al.", cat: "Programming", year: 2022, edition: "4th edition", publisher: "MIT Press", call: "005.1 COR", shelf: "Level 2, aisle C5", total: 4, avail: 1, tags: "algorithms data structures complexity sorting graphs", desc: "The standard university text on algorithms. Covers sorting, graph algorithms, dynamic programming and the analysis of running time." },
    { id: 5, title: "Eloquent JavaScript", author: "Marijn Haverbeke", cat: "Web Development", year: 2018, edition: "3rd edition", publisher: "No Starch Press", call: "005.133 HAV", shelf: "Level 1, aisle B3", total: 5, avail: 2, tags: "javascript browser dom node", desc: "A thorough walk through JavaScript, from values and functions to the browser DOM and Node.js, with exercises at the end of each chapter." },
    { id: 6, title: "Learning Web Design", author: "Jennifer Niederst Robbins", cat: "Web Development", year: 2018, edition: "5th edition", publisher: "O'Reilly", call: "006.7 ROB", shelf: "Level 1, aisle B3", total: 4, avail: 3, tags: "html css layout responsive beginner", desc: "A beginner's guide to HTML, CSS and responsive layout. Each chapter ends with exercises you can build on your own computer." },
    { id: 7, title: "JavaScript: The Good Parts", author: "Douglas Crockford", cat: "Web Development", year: 2008, edition: "1st edition", publisher: "O'Reilly", call: "005.133 CRO", shelf: "Level 1, aisle B4", total: 2, avail: 0, tags: "javascript functions objects", desc: "A compact opinionated book on the parts of JavaScript worth using, and the parts to avoid." },
    { id: 8, title: "Don't Make Me Think", author: "Steve Krug", cat: "Web Development", year: 2014, edition: "Revisited", publisher: "New Riders", call: "005.437 KRU", shelf: "Level 1, aisle B5", total: 3, avail: 2, tags: "usability ux interface design navigation", desc: "A short, readable book on web usability. Explains how people actually scan pages and how to design screens that need no explanation." },
    { id: 9, title: "Software Engineering", author: "Ian Sommerville", cat: "Software Engineering", year: 2015, edition: "10th edition", publisher: "Pearson", call: "005.1 SOM", shelf: "Level 2, aisle D1", total: 8, avail: 5, tags: "requirements agile testing uml lifecycle", desc: "A broad textbook on how software is specified, designed, built, tested and maintained, including agile methods and project management." },
    { id: 10, title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", cat: "Software Engineering", year: 2017, edition: "1st edition", publisher: "O'Reilly", call: "005.74 KLE", shelf: "Level 2, aisle D2", total: 2, avail: 1, tags: "scalability distributed systems storage architecture", desc: "Explains the ideas behind modern data systems, from storage engines and replication to batch and stream processing." },
    { id: 11, title: "Database System Concepts", author: "Abraham Silberschatz et al.", cat: "Databases", year: 2019, edition: "7th edition", publisher: "McGraw-Hill", call: "005.74 SIL", shelf: "Level 3, aisle A2", total: 6, avail: 4, tags: "sql relational transactions normalisation design", desc: "A full course in database systems: the relational model, SQL, schema design, transactions and storage." },
    { id: 12, title: "Fundamentals of Database Systems", author: "Ramez Elmasri, Shamkant Navathe", cat: "Databases", year: 2015, edition: "7th edition", publisher: "Pearson", call: "005.74 ELM", shelf: "Level 3, aisle A2", total: 5, avail: 0, tags: "er diagrams sql normalisation database design", desc: "Covers entity-relationship modelling, SQL, normalisation and query processing with a strong focus on design." },
    { id: 13, title: "Research Methodology: Methods and Techniques", author: "C. R. Kothari", cat: "Research Methods", year: 2019, edition: "4th edition", publisher: "New Age International", call: "001.42 KOT", shelf: "Level 3, aisle B1", total: 10, avail: 7, tags: "research proposal sampling questionnaire data collection", desc: "Walks through the research process: choosing a problem, designing the study, sampling, collecting and analysing data, and writing the report." },
    { id: 14, title: "Research Design", author: "John W. Creswell, J. David Creswell", cat: "Research Methods", year: 2018, edition: "5th edition", publisher: "SAGE", call: "001.42 CRE", shelf: "Level 3, aisle B1", total: 4, avail: 2, tags: "qualitative quantitative mixed methods proposal", desc: "Compares qualitative, quantitative and mixed-methods approaches and shows how to plan a study and write the proposal." },
    { id: 15, title: "Computer Networking: A Top-Down Approach", author: "James Kurose, Keith Ross", cat: "Systems & Networks", year: 2020, edition: "8th edition", publisher: "Pearson", call: "004.6 KUR", shelf: "Level 3, aisle C3", total: 5, avail: 3, tags: "network protocols http tcp internet", desc: "Teaches networking from the application layer down, starting with the web and email before reaching TCP, IP and links." },
    { id: 16, title: "Operating System Concepts", author: "Abraham Silberschatz et al.", cat: "Systems & Networks", year: 2018, edition: "10th edition", publisher: "Wiley", call: "005.43 SIL", shelf: "Level 3, aisle C4", total: 4, avail: 1, tags: "processes memory scheduling file systems", desc: "A standard text on processes, memory, storage and security in operating systems." }
  ];
  var byId = function (id) { return BOOKS.filter(function (b) { return b.id === id; })[0]; };

  /* ---------- State ---------- */
  var state = {
    user: null,
    view: "login",
    q: "", cat: "all", sort: "rel", availOnly: false,
    bookId: null,
    accounts: [{ reg: "2025/DSWE/DAY/0032/G", name: "GROUP G", email: "group.g@student.uict.ac.ug", password: "demo123" }],
    pendingAccount: null,
    resetFor: null,
    after: null,
    requests: [],
    lastRequest: null,
    from: "search"
  };
  var POPULAR = [11, 9, 13, 5, 1, 15];
  var ONLOAN = [{ id: 14, dueIn: 6 }, { id: 2, dueIn: 1 }];

  /* ---------- Helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function hl(text, terms) {
    if (!terms.length) return esc(text);
    var re = new RegExp("(" + terms.map(reEsc).join("|") + ")", "ig");
    return text.split(re).map(function (p, i) { return i % 2 ? "<mark>" + esc(p) + "</mark>" : esc(p); }).join("");
  }
  function iso(d) { var m = d.getMonth() + 1, day = d.getDate(); return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day; }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function fmt(d) { return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }); }
  function parseISO(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function hue(cat) { return CATS[cat]; }
  function cover(b, mini, w) {
    return '<div class="cover' + (mini ? " mini" : "") + '" style="background:linear-gradient(135deg,hsl(' + hue(b.cat) + ' 45% 34%),hsl(' + (hue(b.cat) + 24) + ' 50% 22%)' + ')' + (w ? ";width:" + w : "") + '" aria-hidden="true"><div class="c-in"><span class="c-title">' + esc(b.title) + '</span><span class="c-author">' + esc(b.author) + "</span></div></div>";
  }
  function availPill(b) {
    if (b.avail === 0) return '<span class="pill bad">All copies on loan</span>';
    if (b.avail === 1) return '<span class="pill warn">1 of ' + b.total + " copies available</span>";
    return '<span class="pill ok">' + b.avail + " of " + b.total + " copies available</span>";
  }
  function requestFor(id) { return state.requests.filter(function (r) { return r.bookId === id; })[0]; }

  /* ---------- Router ---------- */
  var JOURNEY = ["search", "details", "request", "confirm"];
  var AUTH_VIEWS = ["login", "register", "verify", "forgot", "forgotsent", "reset"];
  var PROTECTED = ["dashboard", "request", "confirm"];
  function go(view, opts) {
    opts = opts || {};
    if (view === "home") view = state.user ? "dashboard" : "search";
    if (PROTECTED.indexOf(view) > -1 && !state.user) {
      state.after = view === "request" ? "request" : null;
      opts = { notice: view === "request" ? ["Log in or create an account to request this book. It takes a minute.", "info"] : null };
      view = "login";
    }
    state.view = view;
    $$("[data-view]").forEach(function (s) { s.hidden = s.dataset.view !== view; });
    var showChrome = AUTH_VIEWS.indexOf(view) < 0;
    $("#appbar").hidden = !showChrome;
    $("#foot").hidden = !showChrome;
    $("#userBox").hidden = !state.user;
    $("#guestBox").hidden = !!state.user;
    $("#nav-dashboard").hidden = !state.user;
    var inJourney = JOURNEY.indexOf(view) > -1;
    $("#journey").hidden = !inJourney;
    if (inJourney) {
      var idx = JOURNEY.indexOf(view);
      $$("#journey li").forEach(function (li, i) {
        li.dataset.state = i < idx ? "done" : i === idx ? "current" : "todo";
        var dot = $(".dot", li);
        dot.textContent = i < idx ? "✓" : String(i + 1);
        if (i === idx) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
      });
    }
    $$(".nav button").forEach(function (b) { b.removeAttribute("aria-current"); });
    var navKey = view === "dashboard" ? "dashboard" : inJourney ? "search" : null;
    if (navKey) $("#nav-" + navKey).setAttribute("aria-current", "page");

    if (view === "dashboard") renderDashboard();
    if (view === "search") renderSearchView(opts);
    if (view === "details") renderDetails();
    if (view === "request") renderRequest();
    if (view === "confirm") renderConfirm();
    if (view === "login") prepLogin(opts);
    if (view === "register") prepForm("#regForm", "#regErr");
    if (view === "forgot") prepForm("#forgotForm");
    if (view === "reset") prepForm("#resetForm");
    if (view === "verify") { $("#verEmail").textContent = state.pendingAccount ? state.pendingAccount.email : ""; $("#verStatus").textContent = ""; }
    if (view === "forgotsent") $("#fsReg").textContent = state.resetFor || "";

    window.scrollTo(0, 0);
    var h = $('[data-view="' + view + '"] h1') || $("#main");
    if (!h.hasAttribute("tabindex")) h.setAttribute("tabindex", "-1");
    h.focus({ preventScroll: true });
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-go]");
    if (t) { e.preventDefault(); go(t.dataset.go); return; }
    var o = e.target.closest("[data-open]");
    if (o) { e.preventDefault(); openBook(+o.dataset.open, o.dataset.from); }
  });
  function openBook(id, from) { state.bookId = id; state.from = from || state.view; go("details"); }

  /* ---------- Generic validation ---------- */
  function setError(fieldEl, msg) {
    var input = $("input, select, textarea", fieldEl);
    var err = $(".err", fieldEl);
    fieldEl.classList.toggle("invalid", !!msg);
    fieldEl.classList.toggle("valid", !msg && !!(input.type === "checkbox" ? false : input.value));
    if (err) err.textContent = msg || "";
    if (input) { if (msg) input.setAttribute("aria-invalid", "true"); else input.removeAttribute("aria-invalid"); }
  }
  function runValidators(form, rules) {
    var errors = [];
    Object.keys(rules).forEach(function (name) {
      var fieldEl = $('[data-field="' + name + '"]', form);
      var input = $("input, select, textarea", fieldEl);
      var msg = rules[name](input);
      setError(fieldEl, msg);
      if (msg) errors.push({ input: input, msg: msg });
    });
    return errors;
  }
  function showSummary(box, errors) {
    if (!errors.length) { box.hidden = true; box.innerHTML = ""; return; }
    box.hidden = false;
    box.innerHTML = "<h2>Please fix " + errors.length + (errors.length > 1 ? " problems" : " problem") + " before continuing</h2><ul>" +
      errors.map(function (e) { return '<li><a href="#' + e.input.id + '" data-focus="' + e.input.id + '">' + esc(e.msg) + "</a></li>"; }).join("") + "</ul>";
    box.focus();
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-focus]");
    if (a) { e.preventDefault(); var el = document.getElementById(a.dataset.focus); el.focus(); el.scrollIntoView({ block: "center", behavior: "smooth" }); }
  });

  /* ---------- 1. Login ---------- */
  // Registration number format: year / programme / study mode / 4-digit number / group letter, e.g. 2025/DSWE/DAY/0036/G
  var REG = /^[0-9]{4}\/[A-Za-z]{2,6}\/[A-Za-z]{2,5}\/[0-9]{4}\/[A-Za-z]$/;
  var loginRules = {
    regNo: function (i) {
      var v = i.value.trim();
      if (!v) return "Enter your registration number.";
      if (!REG.test(v)) return "Use the format 2025/DSWE/DAY/0036/G.";
      return "";
    },
    password: function (i) {
      if (!i.value) return "Enter your password.";
      if (i.value.length < 6) return "Your password has at least 6 characters.";
      return "";
    }
  };
  function notice(msg, kind) {
    var n = $("#loginNotice");
    if (!msg) { n.hidden = true; n.textContent = ""; return; }
    n.className = "notice " + (kind || "info"); n.textContent = msg; n.hidden = false;
  }
  function prepLogin(opts) {
    notice(opts.notice && opts.notice[0], opts.notice && opts.notice[1]);
    $("#loginErr").hidden = true;
    $$("#loginForm .field").forEach(function (f) { setError(f, ""); f.classList.remove("valid"); });
    $("#password").value = "";
    if (opts.reg) $("#regNo").value = opts.reg;
  }
  function prepForm(sel, errSel) {
    var f = $(sel); f.reset();
    $$(".field", f).forEach(function (x) { setError(x, ""); x.classList.remove("valid"); });
    $$("[data-pw]", f).forEach(function (i) { i.type = "password"; });
    if (errSel) $(errSel).hidden = true;
  }
  function findAccount(reg) { return state.accounts.filter(function (a) { return a.reg === reg.trim().toUpperCase(); })[0]; }
  function signIn(acct) {
    state.user = acct;
    $("#userName").textContent = acct.name;
    $("#avatar").textContent = acct.name.split(" ").map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
    var next = state.after; state.after = null;
    go(next && state.bookId ? next : "dashboard");
  }
  $("#loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var box = $("#loginErr");
    var errs = runValidators(e.target, loginRules);
    if (errs.length) {
      box.hidden = false;
      box.textContent = "We could not log you in. Check the highlighted fields.";
      errs[0].input.focus();
      return;
    }
    var acct = findAccount($("#regNo").value);
    if (!acct) {
      setError($('[data-field="regNo"]'), "No account found for this registration number.");
      box.hidden = false;
      box.innerHTML = 'There is no account yet for this number. Check for typing mistakes, or <button type="button" class="link-btn" data-go="register">create an account</button>.';
      $("#regNo").focus();
      return;
    }
    if (acct.password !== $("#password").value) {
      setError($('[data-field="password"]'), "That password is not right. Try again or reset it.");
      box.hidden = false;
      box.innerHTML = 'Wrong password. <button type="button" class="link-btn" data-go="forgot">Reset your password</button> if you cannot remember it.';
      $("#password").focus();
      return;
    }
    box.hidden = true; notice("");
    signIn(acct);
  });
  $$("#loginForm input").forEach(function (inp) {
    inp.addEventListener("blur", function () {
      var name = inp.name;
      if (inp.value) setError($('[data-field="' + name + '"]'), loginRules[name](inp));
    });
  });
  $("#demoFill").addEventListener("click", function () {
    $("#regNo").value = "2025/DSWE/DAY/0032/G"; $("#password").value = "demo123";
    $$("#loginForm .field").forEach(function (f) { setError(f, ""); });
    $("#loginErr").hidden = true;
    $("#loginForm button[type=submit]").focus();
  });

  /* Live validation for the extra forms */
  function bindLive(formSel, rules) {
    var f = $(formSel);
    f.addEventListener("focusout", function (e) {
      var fieldEl = e.target.closest("[data-field]");
      if (!fieldEl || !rules[fieldEl.dataset.field]) return;
      if (e.target.value || fieldEl.classList.contains("invalid")) setError(fieldEl, rules[fieldEl.dataset.field](e.target));
    });
    f.addEventListener("input", function (e) {
      var fieldEl = e.target.closest("[data-field]");
      if (fieldEl && fieldEl.classList.contains("invalid") && rules[fieldEl.dataset.field]) setError(fieldEl, rules[fieldEl.dataset.field](e.target));
    });
  }
  function passwordRule(i) {
    var v = i.value;
    if (!v) return "Enter a password.";
    if (v.length < 8) return "Use at least 8 characters.";
    if (!/[A-Za-z]/.test(v) || !/[0-9]/.test(v)) return "Include at least one letter and one number.";
    return "";
  }
  document.addEventListener("change", function (e) {
    if (!e.target.classList.contains("showpw")) return;
    $$("[data-pw]", e.target.closest("form")).forEach(function (i) { i.type = e.target.checked ? "text" : "password"; });
  });

  /* Create account */
  var regRules = {
    rName: function (i) {
      var v = i.value.trim();
      if (!v) return "Enter your full name.";
      if (v.length < 3 || v.indexOf(" ") < 0) return "Enter your first and last name.";
      return "";
    },
    rReg: function (i) {
      var v = i.value.trim();
      if (!v) return "Enter your registration number.";
      if (!REG.test(v)) return "Use the format 2025/DSWE/DAY/0036/G.";
      if (findAccount(v)) return "An account already exists for this number. Log in or reset your password.";
      return "";
    },
    rEmail: function (i) {
      var v = i.value.trim();
      if (!v) return "Enter your university email.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email address.";
      if (!/@(student\.)?uict\.ac\.ug$/i.test(v)) return "Use your university email, ending in @student.uict.ac.ug.";
      return "";
    },
    rPass: passwordRule,
    rConfirm: function (i) {
      if (!i.value) return "Type the password again.";
      if (i.value !== $("#rPass").value) return "The passwords do not match.";
      return "";
    }
  };
  bindLive("#regForm", regRules);
  $("#rPass").addEventListener("input", function () {
    var c = $("#rConfirm");
    if (c.value) setError($('[data-field="rConfirm"]'), regRules.rConfirm(c));
  });
  $("#regForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var errs = runValidators(e.target, regRules);
    showSummary($("#regErr"), errs);
    if (errs.length) return;
    state.pendingAccount = { reg: $("#rReg").value.trim().toUpperCase(), name: $("#rName").value.trim(), email: $("#rEmail").value.trim().toLowerCase(), password: $("#rPass").value };
    go("verify");
  });
  $("#simVerify").addEventListener("click", function () {
    var a = state.pendingAccount; if (!a) { go("register"); return; }
    state.accounts.push(a); state.pendingAccount = null;
    go("login", { reg: a.reg, notice: ["Email confirmed. Your account is ready. Log in to continue.", "ok"] });
    $("#password").focus();
  });
  $("#resendVerify").addEventListener("click", function () {
    $("#verStatus").textContent = "We sent the email again at " + new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) + ". Check your spam folder too.";
  });

  /* Forgot / reset password */
  var forgotRules = {
    fReg: function (i) {
      var v = i.value.trim();
      if (!v) return "Enter your registration number.";
      if (!REG.test(v)) return "Use the format 2025/DSWE/DAY/0036/G.";
      return "";
    }
  };
  bindLive("#forgotForm", forgotRules);
  $("#forgotForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (runValidators(e.target, forgotRules).length) { $("#fReg").focus(); return; }
    state.resetFor = $("#fReg").value.trim().toUpperCase();
    go("forgotsent");
  });
  $("#simReset").addEventListener("click", function () { go("reset"); });
  var resetRules = {
    nPass: passwordRule,
    nConfirm: function (i) {
      if (!i.value) return "Type the password again.";
      if (i.value !== $("#nPass").value) return "The passwords do not match.";
      return "";
    }
  };
  bindLive("#resetForm", resetRules);
  $("#nPass").addEventListener("input", function () {
    var c = $("#nConfirm");
    if (c.value) setError($('[data-field="nConfirm"]'), resetRules.nConfirm(c));
  });
  $("#resetForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var errs = runValidators(e.target, resetRules);
    if (errs.length) { errs[0].input.focus(); return; }
    var a = findAccount(state.resetFor || "");
    if (a) a.password = $("#nPass").value;
    go("login", { reg: state.resetFor, notice: ["Password changed. Log in with your new password.", "ok"] });
    $("#password").focus();
  });

  $("#togglePw").addEventListener("click", function (e) {
    var p = $("#password"), show = p.type === "password";
    p.type = show ? "text" : "password";
    e.target.textContent = show ? "Hide" : "Show";
    e.target.setAttribute("aria-pressed", String(show));
  });
  $("#logout").addEventListener("click", function () {
    state.user = null; state.requests = []; state.lastRequest = null;
    BOOKS.forEach(function (b) { b.avail = b.avail + (b._held || 0); b._held = 0; });
    $("#loginForm").reset();
    state.after = null;
    go("login");
  });

  /* ---------- 2. Dashboard ---------- */
  function renderDashboard() {
    var first = state.user.name.split(" ")[0];
    if (/^Student/.test(first)) first = "there";
    $("#dash-h").textContent = "Welcome back, " + first;
    $("#todayLabel").textContent = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
    var pending = state.requests.length;
    $("#stats").innerHTML =
      stat(ONLOAN.length, "Books on loan") +
      stat(pending, "Pending requests") +
      stat(1, "Due in the next 2 days");
    $("#catChips").innerHTML = Object.keys(CATS).map(function (c) { return '<button class="chip" data-cat="' + esc(c) + '">' + esc(c) + "</button>"; }).join("");
    $("#popular").innerHTML = POPULAR.map(function (id) {
      var b = byId(id);
      return '<button class="shelf-item" data-open="' + b.id + '" data-from="dashboard" aria-label="' + esc(b.title + " by " + b.author) + '">' + cover(b) +
        '<span class="t">' + esc(b.title) + '</span><span class="a">' + esc(b.author.split(",")[0].replace(" et al.", " et al.")) + "</span></button>";
    }).join("");
    $("#myRequests").innerHTML = state.requests.length
      ? '<ul class="list">' + state.requests.map(function (r) {
          var b = byId(r.bookId);
          return "<li>" + cover(b, true) + '<div class="grow"><button class="link-btn" data-open="' + b.id + '" data-from="dashboard">' + esc(b.title) + "</button><span>Pick-up " + esc(fmt(r.pickup)) + '</span></div><span class="pill warn">Pending</span></li>';
        }).join("") + "</ul>"
      : '<div class="empty" style="padding:8px 0"><b>No requests yet</b><span>Search the catalogue and request a book. It will show up here.</span></div>';
    $("#onLoan").innerHTML = ONLOAN.map(function (l) {
      var b = byId(l.id), due = addDays(new Date(), l.dueIn);
      var soon = l.dueIn <= 2;
      return "<li>" + cover(b, true) + '<div class="grow"><button class="link-btn" data-open="' + b.id + '" data-from="dashboard">' + esc(b.title) + "</button><span>Due " + esc(fmt(due)) + '</span></div><span class="pill ' + (soon ? "warn" : "ok") + '">' + (l.dueIn === 1 ? "Tomorrow" : l.dueIn + " days") + "</span></li>";
    }).join("");
  }
  function stat(n, label) { return '<div class="card stat"><b>' + n + '</b><span class="muted">' + label + "</span></div>"; }
  $("#catChips").addEventListener("click", function (e) {
    var c = e.target.closest("[data-cat]");
    if (c) { state.q = ""; state.cat = c.dataset.cat; state.availOnly = false; go("search", { keep: true }); }
  });
  $("#heroSearch").addEventListener("submit", function (e) {
    e.preventDefault();
    state.q = $("#heroQ").value.trim(); state.cat = "all"; state.availOnly = false;
    go("search", { keep: true });
  });

  /* ---------- 3. Search ---------- */
  function renderSearchView() {
    $("#cat").innerHTML = '<option value="all">All subjects</option>' + Object.keys(CATS).map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("");
    $("#q").value = state.q; $("#cat").value = state.cat; $("#sort").value = state.sort; $("#availOnly").checked = state.availOnly;
    runSearch();
  }
  function terms() { return state.q.toLowerCase().split(/\s+/).filter(Boolean); }
  function runSearch() {
    var ts = terms();
    var list = BOOKS.map(function (b) {
      var hay = (b.title + " " + b.author + " " + b.cat + " " + b.tags).toLowerCase();
      if (state.cat !== "all" && b.cat !== state.cat) return null;
      if (state.availOnly && b.avail === 0) return null;
      var score = 0;
      for (var i = 0; i < ts.length; i++) {
        if (hay.indexOf(ts[i]) < 0) return null;
        score += b.title.toLowerCase().indexOf(ts[i]) > -1 ? 3 : b.author.toLowerCase().indexOf(ts[i]) > -1 ? 2 : 1;
      }
      return { b: b, score: score };
    }).filter(Boolean);
    if (state.sort === "title") list.sort(function (a, c) { return a.b.title.localeCompare(c.b.title); });
    else if (state.sort === "year") list.sort(function (a, c) { return c.b.year - a.b.year; });
    else list.sort(function (a, c) { return c.score - a.score || a.b.title.localeCompare(c.b.title); });

    var what = state.q ? " for “" + state.q + "”" : "";
    $("#count").textContent = list.length ? list.length + (list.length === 1 ? " book found" : " books found") + what : "No books found" + what;
    $("#results").innerHTML = list.length ? list.map(function (x) {
      var b = x.b;
      return '<article class="result" data-open="' + b.id + '" data-from="search">' + cover(b, true) +
        '<div class="body"><h3><button data-open="' + b.id + '" data-from="search">' + hl(b.title, ts) + "</button></h3>" +
        '<div class="meta"><span>' + hl(b.author, ts) + "</span><span>" + b.year + "</span><span>" + esc(b.cat) + "</span></div>" +
        '<div class="foot">' + availPill(b) + (requestFor(b.id) ? '<span class="pill info">You requested this</span>' : "") + "</div></div></article>";
    }).join("") : '<div class="card empty"><b>Nothing matches your search</b><span>Check the spelling, try a broader word such as “database”, or clear the filters.</span><button class="btn btn-secondary" id="emptyClear">Clear filters</button></div>';
  }
  $("#q").addEventListener("input", function (e) { state.q = e.target.value.trim(); runSearch(); });
  $("#cat").addEventListener("change", function (e) { state.cat = e.target.value; runSearch(); });
  $("#sort").addEventListener("change", function (e) { state.sort = e.target.value; runSearch(); });
  $("#availOnly").addEventListener("change", function (e) { state.availOnly = e.target.checked; runSearch(); });
  function clearFilters() { state.q = ""; state.cat = "all"; state.sort = "rel"; state.availOnly = false; renderSearchView(); $("#q").focus(); }
  $("#clearFilters").addEventListener("click", clearFilters);
  $("#results").addEventListener("click", function (e) { if (e.target.id === "emptyClear") clearFilters(); });

  /* ---------- 4. Details ---------- */
  function renderDetails() {
    var b = byId(state.bookId), req = requestFor(b.id);
    var fromLabel = state.from === "dashboard" ? "Dashboard" : "Search results";
    var copies = ""; for (var i = 0; i < b.total; i++) copies += '<i class="' + (i < b.avail ? "" : "out") + '"></i>';
    var action;
    if (req) action = '<p class="pill info">You requested this book</p><button class="btn btn-secondary" data-go="dashboard">View my requests</button>';
    else if (b.avail > 0 && !state.user) action = '<button class="btn btn-primary" id="requestBtn">Log in to request</button><p class="muted" style="font-size:.9rem">You can browse without an account. Log in or create one to request this book.</p>';
    else if (b.avail > 0) action = '<button class="btn btn-primary" id="requestBtn">Request to borrow</button>';
    else action = '<button class="btn btn-primary" disabled aria-describedby="noCopy">Request to borrow</button><p class="muted" id="noCopy" style="font-size:.9rem">Every copy is on loan. Check again soon or find a similar title.</p>';
    var related = BOOKS.filter(function (x) { return x.cat === b.cat && x.id !== b.id; }).slice(0, 4);
    $("#detailWrap").innerHTML =
      '<div class="crumbs"><button class="link-btn" data-go="' + (state.from === "dashboard" ? "dashboard" : "search") + '">' + fromLabel + '</button><span class="sep" aria-hidden="true">/</span><span aria-current="page">' + esc(b.title) + "</span></div>" +
      '<div class="detail"><div>' + cover(b) + '</div><div class="info">' +
      '<div><p class="eyebrow">' + esc(b.cat) + '</p><h1 id="det-h" style="margin-top:6px">' + esc(b.title) + '</h1><p class="muted" style="margin-top:6px;font-size:1.05rem">by ' + esc(b.author) + "</p></div>" +
      '<p style="max-width:62ch">' + esc(b.desc) + "</p>" +
      '<div class="card avail-box"><div class="row"><div>' + availPill(b) + '</div><div class="copies" aria-hidden="true">' + copies + '</div></div><div class="actions">' + action + "</div></div>" +
      '<dl class="facts"><div><dt>Edition</dt><dd>' + esc(b.edition) + "</dd></div><div><dt>Published</dt><dd>" + b.year + "</dd></div><div><dt>Publisher</dt><dd>" + esc(b.publisher) + "</dd></div><div><dt>Call number</dt><dd>" + esc(b.call) + "</dd></div><div><dt>Shelf location</dt><dd>" + esc(b.shelf) + "</dd></div><div><dt>Loan</dt><dd>7, 14 or 21 days</dd></div></dl>" +
      "</div></div>" +
      '<div><div class="section-head"><h2>More in ' + esc(b.cat) + '</h2></div><div class="shelf">' + related.map(function (r) {
        return '<button class="shelf-item" data-open="' + r.id + '" data-from="' + state.from + '" aria-label="' + esc(r.title) + '">' + cover(r) + '<span class="t">' + esc(r.title) + "</span></button>";
      }).join("") + "</div></div>";
    var rb = $("#requestBtn");
    if (rb) rb.addEventListener("click", function () { go("request"); });
  }

  /* ---------- 5. Request form ---------- */
  var tomorrow = function () { return addDays(new Date(new Date().setHours(0, 0, 0, 0)), 1); };
  var reqRules = {
    fullName: function (i) {
      var v = i.value.trim();
      if (!v) return "Enter your full name.";
      if (v.length < 3 || v.indexOf(" ") < 0) return "Enter your first and last name.";
      return "";
    },
    reqReg: function (i) {
      var v = i.value.trim();
      if (!v) return "Enter your registration number.";
      if (!REG.test(v)) return "Use the format 2025/DSWE/DAY/0036/G.";
      return "";
    },
    email: function (i) {
      var v = i.value.trim();
      if (!v) return "Enter your university email.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email, such as name@student.uict.ac.ug.";
      return "";
    },
    phone: function (i) {
      var v = i.value.replace(/[\s-]/g, "");
      if (!v) return "Enter a phone number we can text.";
      if (!/^(\+256|0)7\d{8}$/.test(v)) return "Use a Ugandan mobile number, such as 0772 123 456.";
      return "";
    },
    loanPeriod: function (i) { return i.value ? "" : "Choose how long you need the book."; },
    pickupDate: function (i) {
      if (!i.value) return "Choose a pick-up date.";
      var d = parseISO(i.value), min = tomorrow(), max = addDays(min, 13);
      if (d < min) return "Pick-up starts from tomorrow. Choose " + fmt(min) + " or later.";
      if (d > max) return "You can book up to 14 days ahead. Choose " + fmt(max) + " or earlier.";
      if (d.getDay() === 0) return "The library is closed on Sundays. Choose another day.";
      return "";
    },
    pickupPoint: function (i) { return i.value ? "" : "Choose where you will collect the book."; },
    terms: function (i) { return i.checked ? "" : "Tick the box to confirm you accept the loan terms."; }
  };
  function renderRequest() {
    var b = byId(state.bookId);
    if (requestFor(b.id) || b.avail < 1) { go("details"); return; }
    $("#reqCrumbs").innerHTML = '<button class="link-btn" data-go="search">Search results</button><span class="sep" aria-hidden="true">/</span><button class="link-btn" id="crumbBook">' + esc(b.title) + '</button><span class="sep" aria-hidden="true">/</span><span aria-current="page">Request</span>';
    $("#crumbBook").addEventListener("click", function () { go("details"); });
    $("#reqAside").innerHTML = '<div class="mini-book">' + cover(b, true) + '<div><p class="eyebrow">You are requesting</p><h3 style="margin:4px 0">' + esc(b.title) + '</h3><p class="muted" style="font-size:.9rem">' + esc(b.author) + '</p></div></div><div style="margin-top:14px">' + availPill(b) + '</div><p class="muted" style="margin-top:14px;font-size:.9rem">We hold your copy for you until 5:00 pm on the pick-up date. A librarian confirms the request, usually within one working day.</p>';
    var f = $("#reqForm");
    f.reset();
    $$(".field", f).forEach(function (x) { setError(x, ""); x.classList.remove("valid"); });
    $("#reqErr").hidden = true;
    $("#fullName").value = state.user.name.indexOf("Student ") === 0 ? "" : state.user.name;
    $("#reqReg").value = state.user.reg;
    $("#email").value = state.user.email;
    var pd = $("#pickupDate"); pd.min = iso(tomorrow()); pd.max = iso(addDays(tomorrow(), 13));
    $("#notesCount").textContent = "0";
  }
  $("#reqForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var errs = runValidators(e.target, reqRules);
    showSummary($("#reqErr"), errs);
    if (errs.length) return;
    var b = byId(state.bookId);
    var pickup = parseISO($("#pickupDate").value), period = +$("#loanPeriod").value;
    var d = new Date(), ref = "LIB-" + String(d.getFullYear()).slice(2) + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2) + "-" + Math.floor(1000 + Math.random() * 9000);
    var r = {
      ref: ref, bookId: b.id, pickup: pickup, period: period, due: addDays(pickup, period),
      point: $("#pickupPoint").value, name: $("#fullName").value.trim(), reg: $("#reqReg").value.trim().toUpperCase(),
      email: $("#email").value.trim(), phone: $("#phone").value.trim(), notes: $("#notes").value.trim()
    };
    b.avail -= 1; b._held = (b._held || 0) + 1;
    state.requests.push(r); state.lastRequest = r;
    go("confirm");
  });
  $("#reqForm").addEventListener("focusout", function (e) {
    var fieldEl = e.target.closest("[data-field]");
    if (!fieldEl) return;
    var name = fieldEl.dataset.field;
    if (reqRules[name] && (e.target.value || fieldEl.classList.contains("invalid"))) setError(fieldEl, reqRules[name](e.target));
  });
  $("#reqForm").addEventListener("change", function (e) {
    var fieldEl = e.target.closest("[data-field]");
    if (fieldEl && fieldEl.classList.contains("invalid") && reqRules[fieldEl.dataset.field]) setError(fieldEl, reqRules[fieldEl.dataset.field](e.target));
  });
  $("#notes").addEventListener("input", function (e) { $("#notesCount").textContent = e.target.value.length; });
  $("#reqBack").addEventListener("click", function () { go("details"); });

  /* ---------- 6. Confirmation ---------- */
  function renderConfirm() {
    var r = state.lastRequest, b = byId(r.bookId);
    $("#confirmWrap").innerHTML =
      '<div class="card raised" style="display:flex;flex-direction:column;gap:22px">' +
      '<div class="confirm-head"><div class="tick"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div><div style="display:flex;flex-direction:column;gap:10px;min-width:0"><h1 id="conf-h">Request sent</h1><p class="muted">We have asked a librarian to confirm your request. Keep your reference number for pick-up.</p>' +
      '<div class="ref"><span id="refText">' + esc(r.ref) + '</span><button class="btn btn-secondary" id="copyRef" style="min-height:36px;padding:4px 14px">Copy</button></div><p class="sr-only" id="copyStatus" role="status"></p></div></div>' +
      '<div class="two-col" style="gap:24px"><div style="display:flex;gap:16px">' + cover(b, true, "84px") +
      '<dl class="facts" style="grid-template-columns:1fr;flex:1;min-width:0"><div><dt>Book</dt><dd>' + esc(b.title) + '</dd></div><div><dt>Pick-up</dt><dd>' + esc(fmt(r.pickup)) + ", " + esc(r.point) + '</dd></div><div><dt>Return by</dt><dd>' + esc(fmt(r.due)) + " (" + r.period + ' days)</dd></div><div><dt>Requested by</dt><dd>' + esc(r.name) + ", " + esc(r.reg) + '</dd></div><div><dt>We will text</dt><dd>' + esc(r.phone) + '</dd></div></dl></div>' +
      '<div><h2 style="font-size:1.05rem;margin-bottom:14px">What happens next</h2><ol class="steps">' +
      '<li class="done"><span class="dot">✓</span><div><b>Request sent</b><span>Today</span></div></li>' +
      '<li class="now"><span class="dot">2</span><div><b>Librarian confirms</b><span>Usually within one working day. Status: pending</span></div></li>' +
      '<li><span class="dot">3</span><div><b>Collect your book</b><span>' + esc(fmt(r.pickup)) + ", before 5:00 pm. Bring your student ID" + '</span></div></li>' +
      '<li><span class="dot">4</span><div><b>Return it</b><span>By ' + esc(fmt(r.due)) + "</span></div></li></ol></div></div>" +
      '<div class="actions"><button class="btn btn-primary" data-go="dashboard">Go to my dashboard</button><button class="btn btn-secondary" id="moreBooks">Find another book</button></div></div>';
    $("#moreBooks").addEventListener("click", function () { state.q = ""; state.cat = "all"; state.availOnly = false; go("search"); });
    $("#copyRef").addEventListener("click", function () {
      var done = function () { $("#copyRef").textContent = "Copied"; $("#copyStatus").textContent = "Reference number copied"; };
      var fallback = function () {
        var rng = document.createRange(); rng.selectNodeContents($("#refText"));
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(rng);
        $("#copyRef").textContent = "Selected";
      };
      try { navigator.clipboard.writeText(r.ref).then(done, fallback); } catch (err) { fallback(); }
    });
  }

  /* ---------- Boot ---------- */
  go("login");
})();
