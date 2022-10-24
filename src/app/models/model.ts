export class Model {
    user: any;
    items: any;
    constructor() {
        this.user = "Todo"
        this.items = [
            new Todo("spor", true),
            new Todo("kahvaltı", false),
            new Todo("ödev", false),
            new Todo("uyku", false),
        ]
    }
}
export class Todo {
    desc: any;
    action: any;
    constructor(desc: any, action: any) {
        this.desc = desc
        this.action = action
    }}