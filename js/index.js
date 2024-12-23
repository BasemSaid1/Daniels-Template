// تحديد الـ navbar
const navbar = document.getElementById("navbar");

// إضافة استماع لحدث التمرير على النافذة
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // إذا تم التمرير أكثر من 50 بكسل
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

var typed = new Typed("#moving", {
  strings: [" Larry Daniels ", " Developer ", " Designer "],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

// تحديد جميع عناصر الأرقام التي تحتوي على الفئة 'card-title'
const counters = document.querySelectorAll(".can");

// الدالة التي تقوم بعد الأرقام
function startCounting(counter) {
  const start = +counter.getAttribute("data-start"); // القيمة الابتدائية
  const target = +counter.getAttribute("data-target"); // الهدف النهائي
  const increment = (target - start) / 100; // سرعة العد (يمكنك تعديل القيمة لتغيير السرعة)

  counter.innerText = start; // تعيين القيمة الابتدائية

  function updateCounter() {
    const current = +counter.innerText;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20); // سرعة التحديث
    } else {
      counter.innerText = target; // التأكد من أن الرقم النهائي يطابق الهدف
    }
  }

  updateCounter();
}

// وظيفة التحقق من الوصول إلى القسم
function checkCountersInView() {
  counters.forEach((counter) => {
    const sectionPosition = counter.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
      startCounting(counter);
    }
  });
}

// إضافة حدث التمرير للتحقق عند التمرير
window.addEventListener("scroll", checkCountersInView);

// التحقق مما إذا كان المستخدم في الصفحة الرئيسية لإخفاء الزر
document.addEventListener("DOMContentLoaded", function () {
  // افحص إذا كان مسار الصفحة هو الصفحة الرئيسية
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    // إخفاء الزر
    document.getElementById("homeButton").style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // دالة لتحديث العنصر النشط
  function setActiveLink() {
    const currentPath = window.location.pathname;

    // إزالة "active" من جميع الروابط
    navLinks.forEach((link) => link.classList.remove("active"));

    // إضافة "active" للرابط الذي يطابق URL الصفحة الحالية
    let linkFound = false;
    navLinks.forEach((link) => {
      if (
        link.getAttribute("href") === currentPath ||
        (link.getAttribute("href") === "index.html" &&
          (currentPath === "/" || currentPath === "/index.html"))
      ) {
        link.classList.add("active");
        linkFound = true;
      }
    });

    // إذا لم يتم العثور على رابط نشط، اجعل "Home" هو النشط افتراضيًا
    if (!linkFound) {
      document
        .querySelector(".navbar-nav .nav-link[href='index.html']")
        .classList.add("active");
    }
  }

  // استدعاء الدالة عند تحميل الصفحة
  setActiveLink();

  // تحديث "active" عند النقر على رابط
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((link) => link.classList.remove("active")); // إزالة "active" من جميع الروابط
      link.classList.add("active"); // إضافة "active" للعنصر الذي تم النقر عليه
    });
  });
});
