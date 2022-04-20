(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        modal: document.querySelector("[data-modal]"),
        link1: document.querySelector("[data-link-1]"),
        link2: document.querySelector("[data-link-2]"),
        link3: document.querySelector("[data-link-3]"),
        link4: document.querySelector("[data-link-4]")
    };

    refs.openModalBtn.addEventListener("click", toggelModal);
    refs.link1.addEventListener("click", removeleLink);
    refs.link2.addEventListener("click", removeleLink);
    refs.link3.addEventListener("click", removeleLink);
    refs.link4.addEventListener("click", removeleLink);

    function toggelModal() {
        document.body.classList.toggle("modal-open");        
    }
    function removeleLink() {
        document.body.classList.remove('modal-open')
    }
})();


