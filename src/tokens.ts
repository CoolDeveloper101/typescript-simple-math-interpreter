export enum TokenType{
    NUMBER = 'NUMBER',
    PLUS = 'PLUS',
    MINUS = 'MINUS',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
    POWER = 'POWER',
    LPAREN = 'LPAREN',
    RPAREN = 'RPAREN'
}

export class Token{
    type: TokenType;
    value: any;

    constructor(type: TokenType, value:any=null){
        this.type = type;
        if (value){ this.value = value}
    }

    public toString(): string {
        if (this.type == TokenType.NUMBER)
            return `${this.type}: ${this.value}`
        return `${this.type}`
    }
}