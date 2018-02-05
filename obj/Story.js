'use strict';

export default class
{
    constructor(inpEl, txtEl, imgEl)
    {
        this.inputEl        = inpEl;
        this.textEl         = txtEl;
        this.imageEl        = imgEl;
        const ch            = null;
        this.currentOptions = null;

        // Bind events
        this.inputEl.addEventListener('keyup', (e)=>{
            console.log(this)
        });
    }

    setChapter(ch)
    {
        this.ch = ch;
        this.process(this.ch.intro());
    }

    process(Obj)
    {
        let txtEl       = document.createElement('p');
        txtEl.innerText = Obj.text;
        this.textEl.appendChild(txtEl);

        this.currentOptions = Obj.options;
    }

    showText(text)
    {

    }

    input(e)
    {
        // Enter pressed
        if (e.keyCode === 13) {
            this.action(e.target.value)
        }
    }

    action(inputText){
        if (this.currentOptions.hasOwnProperty(inputText)) {
            // Execute next step
            this.currentOptions[inputText]();
        } else {
            let output = 'It seems that "' + inputText + '" is not a valid option.';
            this.showText(output);
        }
    }
}