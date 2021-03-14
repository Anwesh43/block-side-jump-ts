const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 4 
const sizeFactor : number = 11.2 
const delay : number = 20 
const colors : Array<string> = [
    "#1abc9c",
    "#2980b9",
    "#c0392b",
    "#2ecc71",
    "#e67e22"
]
const backColor : string = "#bdbdbd"
const scGap : number = 0.02 / parts 
const rot : number = Math.PI / 2 

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }
    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}