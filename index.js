var data = [
    {
        header: true,
        footer: true,
    }
]
var currentPosition = 0;
$(document).ready(preparePage);

function preparePage() {
    generateiFrame();

    window.onbeforeunload = function() {
        return "Data will be lost if you leave the page, are you sure?";
    };

    $('.form-control').on('input', 'input[type="number"]', function(e) {
        var max = parseInt(this.max);
        var min = parseInt(this.min);

        if (parseInt(this.value) > max) {
            this.value = max; 
        }

        if (parseInt(this.value) < min) {
            this.value = min; 
        }
    });

    // Delete existing form elements by clicking the "x"
    $('.form-control').on('click', '.delete', function(e) {
        $(e.currentTarget).parent().closest('.element-container').remove();
        console.log($(e.currentTarget).parent().data('position'))
    });

    // Open the popup to add a new form element
    $('.add-element-btn').click((e) => {
        $('.form-elements').css('display', 'flex');
    });
    $('.form-control').on('click', '.add-element-btn', function(e) {
        currentPosition = $(e.currentTarget).parent().data('position');
        console.log('Add button clicked. Current Position: ', currentPosition);
        $('.form-elements').css('display', 'flex');
    });
    $('.element-btn').click((e) => {
        createFormElement(e)
    })

    // Close the popup
    $('.close').click(() => {
        $('.form-elements').css('display', 'none');
    });

    $('.btn-preview').click(() => {
        generateiFrame();
    });

    $('.btn-html').click(() => {
        generateHtml();
    })
}

function createFormElement(e) {
    var elementName = $(e.currentTarget).data('name');
    console.log('Element button clicked. Current Position: ', currentPosition);

    switch (elementName) {
        case 'title':
            updatePositions();
            currentPosition++;
            var f_Title = `<div class="element-container" data-type="text" data-element="h2" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-title">Title</h2>
                                <span class="label">TEXT</span>
                                <input class="input title-text" type="text">
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_Title).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;
        case 'heading':
            updatePositions();
            currentPosition++;
            var f_Heading = `<div class="element-container" data-type="text" data-element="h3" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-heading">Heading</h2>
                                <span class="label">TEXT</span>
                                <input class="input heading-text" type="text">
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_Heading).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;
        case 'paragraph':
            updatePositions();
            currentPosition++;
            var f_Paragraph = `<div class="element-container" data-type="text" data-element="p" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-paragraph">Paragraph</h2>
                                <span class="label">TEXT</span>
                                <textarea class="input paragraph-text" type="text"></textarea>
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_Paragraph).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;
        case 'help':
            updatePositions();
            currentPosition++;
            var f_Paragraph = `<div class="element-container" data-type="text" data-element="help" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-help">Help Text</h2>
                                <span class="label">TEXT</span>
                                <textarea class="input help-text" type="text"></textarea>
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_Paragraph).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;
        case 'subheading':
            updatePositions();
            currentPosition++;
            var f_Subheading = `<div class="element-container" data-type="text" data-element="h4" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-subheading">Subheading</h2>
                                <span class="label">TEXT</span>
                                <input class="input subheading-text" type="text">
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_Subheading).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;
        case 'preview':
            updatePositions();
            currentPosition++;
            var f_Preview = `<div class="element-container" data-type="text" data-element="pre" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-preview">Preview Text</h2>
                                <span class="label">TEXT</span>
                                <input class="input preview-text" type="text">
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_Preview).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;        
        case 'image':
            updatePositions();
            currentPosition++;
            var f_Image = `<div class="element-container" data-type="feature" data-element="img" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-image">Image</h2>
                                <span class="label">IMAGE SOURCE URL</span>
                                <input class="input image-url" type="text">
                                <span class="label">IMAGE TEXT</span>
                                <input class="input image-text" type="text">
                                <span class="label">IMAGE WIDTH</span>
                                <input class="input image-width" type="number" max="565" value="210">
                                <span class="label">IMAGE HEIGHT</span>
                                <input class="input image-height" type="number" max="565" value="120">
                                <span class="label">SPACING</span>
                                <input class="input image-space input-num" type="text" min="15" max="350" value="15">
                                
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_Image).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;
        case 'button':
            updatePositions();
            currentPosition++;
            var f_Button = `<div class="element-container" data-type="feature" data-element="button" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-button">Button</h2>
                                <span class="label">BUTTON TEXT</span>
                                <input maxlength="21" class="input button-text" type="text">
                                <span class="label">LINK</span>
                                <input class="input button-url" type="text">
                                <span class="label">SPACING</span>
                                <input class="input button-space input-num" type="number" min="15" max="350" value="15">
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_Button).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;
        case 'image-pair':
            updatePositions();
            currentPosition++;
            var f_ImagePair = `<div class="element-container" data-type="feature" data-element="img-pair" data-position="${currentPosition}">
                            <div class="element" data-position="${currentPosition}">
                                <div class="delete">x</div>
                                <h2 class="element-title ele-image-pair">Image Pair</h2>
                                <span class="label">IMAGE 1 SOURCE URL</span>
                                <input class="input image-1-url" type="text">
                                <span class="label">IMAGE 1 TEXT</span>
                                <input class="input image-1-text" type="text">
                                <span class="label">IMAGE 2 SOURCE URL</span>
                                <input class="input image-2-url" type="text">
                                <span class="label">IMAGE 2 TEXT</span>
                                <input class="input image-2-text" type="text">
                            </div>
                            <div class="add-element" data-position="${currentPosition}">
                                <div class="add-spacer"></div>
                                <div class="add-element-btn">+</div>
                                <div class="add-spacer"></div>
                            </div>
                        </div>`
            $(f_ImagePair).insertAfter($(`.element-container[data-position="${currentPosition-1}"]`));
        break;
        default:
        break;
    }
}

function updatePositions() {
    document.querySelectorAll('.element-container').forEach((elem) => {
        var position = parseInt($(elem).attr('data-position'));
        if(position > currentPosition) {
            $(elem).attr('data-position', position+1);
            $(elem).find('.element').attr('data-position', position+1);
            $(elem).find('.add-element').attr('data-position', position+1);
        }
    })
}