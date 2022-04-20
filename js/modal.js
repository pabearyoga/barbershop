(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        modal: document.querySelector("[data-modal]"),
        link: document.querySelector("[data-link]")
    };

    refs.openModalBtn.addEventListener("click", toggelModal);
    refs.link.addEventListener("click", removeleLink);

    function toggelModal() {
        document.body.classList.toggle("modal-open");        
    }
    function removeleLink() {
        document.body.classList.remove('modal-open')
    }
})();


