
export class cardModel {
    constructor(title, {time, type}, due, btn) {
        this.title = title,
        this.duration = {time:time, type:type},
        this.due = due,
        this.btn = btn
    }

    
}