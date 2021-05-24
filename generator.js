var email_container = '';

function generateiFrame() {
    email_container = '';
    // Array to keep track of all of the modules that will be contained in the email container
    var email_cont_array = [];

    // Build the JSON to create the preview & HTML
    if($('.header-url').val() == '')
    {
        data[0].header = false;
    }
    else {
        data[0].header = true;
    }
    if($('.footer-url').val() == '')
    {
        data[0].footer = false;
    } else {
        data[0].footer = true;
    }

    var text_elements = document.querySelectorAll('.element-container[data-type="text"]');
    text_elements.forEach((e) => {
        console.log('looking for data-element= ', $(e).attr('data-element'));
        switch ($(e).attr('data-element')) {
            case 'h2':
                email_cont_array.push({
                    content: `<h2>${$(e).find('.title-text').val()}</h2>`,
                    position: $(e).attr('data-position'),
                    type: 'text'
                })
                break;
            case 'h3':
                email_cont_array.push({
                    content: `<h3>${$(e).find('.heading-text').val()}</h3>`,
                    position: $(e).attr('data-position'),
                    type: 'text'
                })
                break;
            case 'h4':
                email_cont_array.push({
                    content: `<h4>${$(e).find('.subheading-text').val()}</h4>`,
                    position: $(e).attr('data-position'),
                    type: 'text'
                })
                break;
            case 'p':
                email_cont_array.push({
                    content: `<p>${$(e).find('.paragraph-text').val()}</p>`,
                    position: $(e).attr('data-position'),
                    type: 'text'
                })
            break;
            case 'help':
                email_cont_array.push({
                    content: `<p style="color: #c7c7c7; font-size: .8em; text-align: center">${$(e).find('.help-text').val()}</p>`,
                    position: $(e).attr('data-position'),
                    type: 'text'
                })
            break;
            case 'ol':
                email_cont_array.push({
                    content: `<ol>
                    ${$(e).find('.ol-text-1').val() != '' ? '<li>' + $(e).find('.ol-text-1').val() + '</li>' : ''}
                    ${$(e).find('.ol-text-2').val() != '' ? '<li>' + $(e).find('.ol-text-2').val() + '</li>' : ''}
                    ${$(e).find('.ol-text-3').val() != '' ? '<li>' + $(e).find('.ol-text-3').val() + '</li>' : ''}
                    ${$(e).find('.ol-text-4').val() != '' ? '<li>' + $(e).find('.ol-text-4').val() + '</li>' : ''}
                    </ol>`,
                    position: $(e).attr('data-position'),
                    type: 'text'
                })
            break;
            case 'ul':
                email_cont_array.push({
                    content: `<ul>
                    ${$(e).find('.ul-text-1').val() != '' ? '<li>' + $(e).find('.ul-text-1').val() + '</li>' : ''}
                    ${$(e).find('.ul-text-2').val() != '' ? '<li>' + $(e).find('.ul-text-2').val() + '</li>' : ''}
                    ${$(e).find('.ul-text-3').val() != '' ? '<li>' + $(e).find('.ul-text-3').val() + '</li>' : ''}
                    ${$(e).find('.ul-text-4').val() != '' ? '<li>' + $(e).find('.ul-text-4').val() + '</li>' : ''}
                    </ul>`,
                    position: $(e).attr('data-position'),
                    type: 'text'
                })
            break;
        }
    })

    var feature_elements = document.querySelectorAll('.element-container[data-type="feature"]');
    feature_elements.forEach((e) => {
        switch ($(e).attr('data-element')) {
            case 'img':
                email_cont_array.push({
                    content: `<tr><td style="padding: 10px"><table border="0" cellpadding="0"><tr height="100"><td class="spacer" width="${$(e).find('.image-space').val()}"></td><td style="font-family:arial,sans-serif;font-size:15px;color:#575757"><img src="${$(e).find('.image-url').val()}" width="${$(e).find('.image-width').val()}" height="${$(e).find('.image-height').val()}"><p>${$(e).find('.image-text').val()}</p></td></tr></table></td></tr>`,
                    position: $(e).attr('data-position'),
                    type: 'feature'
                })
            break;
            case 'button':
                email_cont_array.push({
                    content: `<tr><td style="padding: 0 10px"><table border="0" cellpadding="0"><tr height="100"><td class="spacer" width="${$(e).find('.button-space').val()}"></td><td style="font-family:arial,sans-serif;font-size:15px;color:#575757"><table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" width="210"><tr><td style="border-radius: 4px; background: #173449; text-align: center;"><a target="_blank" href="${$(e).find('.button-url').val()}" target="_parent" style="background: #173449; border: 1px solid #173449; box-shadow: inset 0 1px 0 0 rgba(0,0,0,0); font-family: arial, sans-serif; font-size: 17px; line-height: 17px; color: #ffffff; text-decoration: none; padding: 13px 17px; display: block; border-radius: 4px; white-space: nowrap;">${$(e).find('.button-text').val()}</a></td></tr></table></td></tr></table></td></tr>`,
                    position: $(e).attr('data-position'),
                    type: 'feature'
                })
            break;
            case 'img-pair':
                email_cont_array.push({
                    content: `<tr><td style="padding: 10px"><table border="0" cellpadding="0"><tr height="100"><td class="spacer" width="50"></td><td style="font-family:arial,sans-serif;font-size:15px;color:#575757"><img src="${$(e).find('.image-1-url').val()}" width="210" height="120"><p>${$(e).find('.image-1-text').val()}</p></td><td class="spacer" width="60"></td><td style="font-family:arial,sans-serif;font-size:15px;color:#575757"><img src="${$(e).find('.image-2-url').val()}" width="210" height="120"><p>${$(e).find('.image-2-text').val()}</p></td></tr></table></td></tr>`,
                    position: $(e).attr('data-position'),
                    type: 'feature'
                })
            break;
        }
    })

    // Module text variables
    var preview_text = $('.preview-text').val();
    var header_image_url = $('.header-url').val();
    var footer_image_url = $('.footer-url').val();

    // HTML-based modules
    var preview_text_container = `<div style="display: none; opacity: 0; mso-hide: all;">${preview_text || 'A message from Learn@Cox...'}</div>`;

    var header_image = `<tr><td height="115"><img alt="Learn@Cox Header" width="620" style="height:100%;width:100%;" src="${header_image_url}"></td></tr>`;

    var footer_image = `<tr><td height="65"><img alt="CAI_Footer" width="620" style="width:620px;height:100%" src="${footer_image_url}"></td></tr>`;

    var final_content = '';
    var holder = '';

    // Sort the email content by position
    email_cont_array.sort((a, b) => (parseInt(a.position) > parseInt(b.position)) ? 1 : -1)
    console.log(email_cont_array);
    // Todo: does not work if there is only one element in the array
    email_cont_array.forEach((el, idx) => {
        if(idx == 0)
        {
            holder += el.content;
            return;
        }
        // If we have an element with the same type as the previous element
        if(el.type == email_cont_array[idx-1].type) 
        {
            // Push the content of the element into the holder array
            holder += el.content;
        } 
        // If we have an element with a different type than the previous element
        else {
            
            if(email_cont_array[idx-1].type == 'text') 
            {
                final_content += `<tr>
                <td style="font-family:arial,sans-serif;font-size:15px;color:#575757; padding:30px 30px 0;">${holder}</td></tr>`;
            } 
            else 
            {
                final_content += `<tr><td style="background-color:#ffffff;"><table border="0"cellpadding="0"cellspacing="0"role="presentation"style="width:620px;"align="left">${holder}</table></td></tr>`;
            }

            holder = "";
            holder += el.content;
        }

        if(idx == email_cont_array.length-1) {
            if(el.type == 'text') 
            {
                final_content += `<tr>
                <td style="font-family:arial,sans-serif;font-size:15px;color:#575757; padding:30px 30px 0;">${holder}</td></tr>`;
            } 
            else 
            {
                final_content += `<tr><td style="background-color:#ffffff;"><table border="0"cellpadding="0"cellspacing="0"role="presentation"style="width:620px;"align="left">${holder}</table></td></tr>`;
            }
        }
    });

    // Main container that will hold all email content
    email_container = `
    <!doctype html><html><head><meta charset="utf-8"></head><body width="620" style="margin: 0; padding: 0 !important; background: #f3f3f5; mso-line-height-rule: exactly;"><center style="width: 100%; background: #f3f3f5;">${preview_text_container}<div style="width: 620px; margin: 0 auto;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:620px;">
    ${data[0].header ? header_image : ''}
    <tr><td style="background-color:#ffffff;"><table border="0"cellpadding="0"cellspacing="0"role="presentation"style="width:620px;"align="left">
    ${final_content}
    </table></td></tr>
    ${data[0].footer ? footer_image : ''}
    </table>
    </div>
    </center>
    </body>
    </html>`;

    $('.preview-container').empty()
    $('.preview-container').append(`<iframe src="data:text/html;charset=utf-8, ${escape(email_container)}" />`)

    $('.char-count').html(email_container.length);
}

function generateHtml() {
    copyToClipboard(email_container);
    alert('HTML copied to clipboard!');
}

/**
 * A helper function to copy the body of the iframe displayed in the page to the user's clipboard
 * @param {String} text 
 */
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orignal page when copying more words
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}