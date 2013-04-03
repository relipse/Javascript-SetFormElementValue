/**
 * SetFormElementValue
 * 
 * Date: Feb 1, 2013
 * Author: Jim Kinsman (relipse@gmail.com)
 * 
 * Written by Jim Kinsmon February 2013, Released to the public domain. Use at your own risk.
 */


/**
 * Set a form element's value|checked
 * @param element elm the form element to set
 * @param mixed value the value to set, true/false for checkboxes and radio boxes string for everything else
 * @return boolean true on success
 */
function SetFormElementValue(elm, value){ 
    if (!elm) return false;
    
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
        elm.checked = !!value;
        return true;
    }else{
      //not a radio box or a checkbox, just change the value
      //do not allow "null" to be put into input boxes (ie problem)
      if (value === null || value === false){ 
         value = ''; 
      }
      elm.value = value;
      return true;
    }
}
