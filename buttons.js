var activeClass = 'active-btn',
    buttonClass = 'muster-btn',
    resultClass = 'result-btn',
    submitClass = 'submit-btn',
    successClass = 'success-btn',
    noTransitionClass = 'no-transition',
    placeholderClass = 'placeholder-btn';

function activate() {
    var self = this,
        content_span = self.children[0],
        content = content_span.innerHTML;
    if( !classie.has( this, activeClass ) ) {
        showProgress(self);
        setTimeout( function() {
            insertPlaceholder(self);
            setTimeout( function() {
                showSuccess(self);
                setTimeout( function() {
                    resetButton(self, content)
                }, 2000);
            }, 1000);
        }, 1000);
    }
}

function showProgress(self) {
    self.children[0].innerHTML = "";
    classie.add( self, activeClass );
}

function insertPlaceholder(self) {
    self.children[0].innerHTML = "Saving";
    classie.add( self, noTransitionClass );
    classie.remove( self, activeClass );
    classie.remove( self, submitClass );
    classie.add( self, placeholderClass );
}

function showSuccess(self) {
    classie.add( self, successClass );
    classie.add( self, resultClass );
}

function resetButton(self, content) {
    self.children[0].innerHTML = content;
    self.className = '';
    classie.add( self, buttonClass);
    classie.add( self, submitClass );
}