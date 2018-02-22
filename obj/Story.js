'use strict';

export default class Story
{
    constructor(inpEl, txtEl, imgEl)
    {
        this.inputEl         = inpEl;
        this.textEl          = txtEl;
        this.imageEl         = imgEl;
        this.ch              = null;
        this.currentOptions  = null;
        const self           = this;
        this.processingText  = false;
        this.processingSpeed = 60;

        // Bind events
        this.inputEl.addEventListener('keyup', this.input.bind(self));
    }

    setChapter(ch)
    {
        this.ch = ch;
        this.process(this.ch.intro());
    }

    process(Obj)
    {
        this.imageEl.src    = (Obj.image !== null) ? Obj.image : '';
        this.currentOptions = Obj.options;
        this.showText(Obj.text);
    }

    showText(text)
    {
        const el            = this.textEl;
        let array           = text.split('');
        let timer;
        this.processingText = true;

        const frameLooper = () => {
            if (array.length > 0) {
                el.innerHTML += array.shift();
            } else {
                el.innerHTML += '<br/>';
                this.processingText = false;
                return clearTimeout(timer);
            }
            timer = setTimeout(frameLooper, this.processingSpeed);
        };
        frameLooper.call(this);
    }

    input(e)
    {
        const fakeInput = document.getElementById('inputRow');

        const react = () => {
            if (this.currentOptions.hasOwnProperty(e.target.value)) {
                this.process(this.currentOptions[e.target.value].call(this.ch));
                e.target.value = '';
            } else {
                let output = 'It seems that "' + e.target.value + '" is not a valid option.';
                this.showText(output);
            }
        };

        const pause = () => {
            return new Promise((resolve) => {
                const waitForText = () => {
                    if (this.processingText === false) {
                        fakeInput.disabled   = false;
                        this.processingSpeed = 60;
                        resolve();
                    } else {
                        fakeInput.disabled   = true;
                        this.processingSpeed = 5;
                        setTimeout(waitForText, 60);
                    }
                };
                waitForText.call(this);
            });
        };

        // Enter pressed
        if (e.keyCode === 13) {
            pause().then(react).catch((err) => console.log(err));
        }
    }

    inputDisabled(state = false)
    {
        const inputRow       = document.getElementById('inputRow');
        const input          = document.getElementById('input');
        const fakeInput      = document.getElementById('fakeInput');
        const fakeInputLabel = document.getElementById('fakeInputLabel');

        if (state) {
            inputRow.disabled       = true;
            input.disabled          = true;
            fakeInput.disabled      = true;
            fakeInputLabel.disabled = true;
        } else {
            inputRow.disabled       = false;
            input.disabled          = false;
            fakeInput.disabled      = false;
            fakeInputLabel.disabled = false;
        }
    }
}