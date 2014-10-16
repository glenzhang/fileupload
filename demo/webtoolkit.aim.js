/**
*
* AJAX IFRAME METHOD (AIM)
* http://www.webtoolkit.info/
*
**/
(function (exports) {

    exports.WTKAIM = { 

        frame: function (c) {
            var n = 'f' + Math.floor(Math.random() * 99999);
            var d = document.createElement('DIV');
            d.className = "J_tem_spoof_iframe"
            d.innerHTML = '<iframe style="display:none" src="about:blank" id="' + n + '" name="' + n + '" onload="WTKAIM.loaded(\'' + n + '\')" border="0"></iframe>';
            document.body.appendChild(d);

            var i = document.getElementById(n);
            if (c && typeof (c.onComplete) == 'function') {
                i.onComplete = c.onComplete;
            }
            return n;
        },

        form: function (f, name) {
            f.setAttribute('target', name);
        },

        submit: function (f, c) {
            this.form(f, this.frame(c));
            if (c && typeof (c.onStart) == 'function') {
                return c.onStart();
            } else {
                return true;
            }
        },

        loaded: function (id) {
            var i = document.getElementById(id);
            if (i.contentDocument) {
                var d = i.contentDocument;
            } else if (i.contentWindow) {
                var d = i.contentWindow.document;
            } else {
                var d = window.frames[id].document;
            }
            if (d.location.href == "about:blank") {
                return;
            }

            if (typeof (i.onComplete) == 'function') {
                i.onComplete(d.body.innerHTML);
            }

            setTimeout(function () {
                $(".J_tem_spoof_iframe").remove();
            }, 250);
        }
    };
}(this));