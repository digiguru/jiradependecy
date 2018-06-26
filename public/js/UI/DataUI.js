
export default class DataUI {
    constructor() {
        this.dataArea = document.getElementById('root');
    }
    LoadingState() {
        this.Update("<p>... loading ...</p>");
    }   
    Update(html) {
        this.dataArea.innerHTML = html;
    } 
}
