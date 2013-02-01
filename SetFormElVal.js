/**
 * SetFormElementValue
 * 
 * Date: Feb 1, 2013
 * Author: Jim Kinsman (relipse@gmail.com)
 * 
 * Copyright (c) 2013 Jim Kinsman
 * I hearby reliquish my right to this code to the public domain. Have fun
 * You can use this code for whatever you want and you 
 * don't have to include any license comments, it is only a snippet.
 */



/**
 * Set a form element's value|checked
 * @param element elm the form element to set
 * @param mixed value the value to set, true/false for checkboxes and radio boxes string for everything else
 * @return boolean true on success
 */
function SetFormElementValue(elm, value){ 
    if (typeof(elm.tagName) == 'undefined' && elm.length > 0 && elm[0].type == 'radio'){
        //radio boxes
        for (var i = 0; i < elm.length; ++i){
                if (elm[i].value == value){
                     elm[i].checked = true;
                }else{ //if it does not match, make sure it is unchecked
                     elm[i].checked = false;
                }                
        }
        return true;
    }else if (elm.type == 'checkbox' || elm.type == 'radio'){
        if (value === false || value === ''){
          elm.checked = false;   
        }else{
          elm.checked = true;
          //if the user passes in true, just check the box
          if (value !== true){
             //actually change the post value!
             elm.value = value;            
          }
        }
        return true;
    }else{
      //not a radio box or a checkbox, just change the value
      elm.value = value;
      return true;
    }
}
