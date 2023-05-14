declare namespace Cypress {
    interface Chainable {
        exists(selector: string): boolean 
        isVisible(selector: string): boolean 
        isCheckbox(selector: string): boolean 
        isChecked(selector: string): boolean 
        hasText(selector: string, text: string): boolean 
        equals(selector: string, text: string): boolean 
        isEmpty(selector: string): boolean 
        hasNoChildren(selector: string, text: string): boolean 
        isDisabled(selector: string): boolean 
        isEnabled(selector: string): boolean 
        isFile(selector: string): boolean 
        isFirstChild(selector: string): boolean 
        isFocused(selector: string): boolean 
        hasSelector(selector: string, innerSelector: string): boolean 
        isHeader(selector: string): boolean 
        isHidden(selector: string): boolean 
        isImage(selector: string): boolean 
        isInput(selector: string): boolean 
        isAnimated(selector: string): boolean 
        isButton(selector: string): boolean 
        isLanguage(selector: string): boolean 
        isLast(selector: string): boolean 
        isLastChild(selector: string): boolean 
        isLastOfType(selector: string): boolean 
        isNot(selector: string, notSelector: string): boolean 
        isParent(selector: string): boolean 
        isPassword(selector: string): boolean 
        isRadio(selector: string): boolean 
        isReset(selector: string): boolean 
        isRoot(selector: string): boolean 
        isSelected(selector: string): boolean 
        isSubmit(selector: string): boolean 
        isText(selector: string): boolean      
        map(callbackFn): Chainable
        
    }
}

