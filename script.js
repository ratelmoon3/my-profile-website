const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "메뉴 열기");
  navigation.classList.remove("is-open");
  menuToggle.querySelector(".material-symbols-outlined").textContent = "menu";
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "메뉴 열기" : "메뉴 닫기");
    navigation.classList.toggle("is-open", !isOpen);
    menuToggle.querySelector(".material-symbols-outlined").textContent = isOpen
      ? "menu"
      : "close";
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("hong@example.com");
      copyButton.querySelector("[data-copy-label]").textContent = "복사됨";
      copyStatus.textContent = "이메일 주소를 클립보드에 복사했습니다.";
      window.setTimeout(() => {
        copyButton.querySelector("[data-copy-label]").textContent = "복사";
      }, 2000);
    } catch (error) {
      copyStatus.textContent =
        "복사할 수 없습니다. hong@example.com 주소를 선택해 복사해 주세요.";
    }
  });
}

const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const senderEmail = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    const subject = `[Portfolio 문의] ${name}`;
    const body = `이름 또는 소속: ${name}\n회신 이메일: ${senderEmail}\n\n${message}`;

    formStatus.textContent =
      "기본 메일 앱에서 메시지를 확인한 뒤 직접 보내 주세요.";
    window.location.href = `mailto:hong@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
