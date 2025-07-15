/////calcultor
 let answer="";
    function EnterNumber(value){
        answer+=value;
        document.getElementById("Answer").value=answer;
    }
    function EnterOperator(value){
        answer+=value;
        document.getElementById("Answer").value=answer;
    }
    function EnterClear(){
        answer="";
        document.getElementById("Answer").value="";

    }
    function EnterEqual(){
        try {
            let result = eval(answer);
            document.getElementById("Answer").value = result;
            answer = result.toString();
        } catch {
            document.getElementById("Answer").value = "Error";
            answer = "";
        }
    }
////////textstyle
  let par = document.getElementById("PAR");
    function ChangeFont(font) {
        par.style.font = font;
    }
    function ChangeAlign(align) {
        par.style.alignItems = align;
    }
    function ChangeHeight(height) {
        par.style.lineHeight = height;
    }
    function ChangeLSpace(space) {
        par.style.letterSpacing = space;
    }
    function ChangeIndent(indent) {
        par.style.textIndent = indent;
    }
    function  ChangeTransform(transform) {
        par.style.textTransform = transform;
    }
    function ChangeDecorate(decorator) {
        par.style.textDecoration = decorator;
    }
    function ChangeBorder(border) {
        par.style.borderStyle = border;
    }
    function ChangeBorderColor(borderColor) {
        par.style.borderColor = borderColor;
    }