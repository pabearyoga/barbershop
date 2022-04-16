(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggelModal);

    function toggelModal() {
        document.body.classList.toggle("modal-open");        
    }
})();