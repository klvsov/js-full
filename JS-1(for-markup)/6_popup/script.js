window.addEventListener('DOMContentLoaded', () => {

    let content = `
    <h1>Title</h1>
    <div class="modal_info">
        <div class="img"></div>
        <div class="modal_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sapiente!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sapiente!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sapiente!</p>
        </div>  
    </div>
    `;
    let overlay = document.querySelector('.overlay');
    let modalWindow = document.querySelector('.modal-window');
   
    function Popup(overlay, modalWindow, content){
        this.overlay = overlay;
        this.modalWindow = modalWindow;
        this.content = content;
        let popup = this;
        popup.open = function(content){
            popup.overlay.classList.remove('display-none');
            modalWindow.innerHTML = content;
            modalWindow.classList.remove('display-none');
            document.body.classList.add('no-scroll');
        }
        
        popup.close = function(){
            overlay.classList.add('display-none');
            modalWindow.classList.add('display-none');
            document.body.classList.remove('no-scroll');
        }

        popup.overlay.addEventListener('click', popup.close);


    }
    
    var p = new Popup(overlay, modalWindow, content);
    
    let btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        p.open(content);
    });
    
});