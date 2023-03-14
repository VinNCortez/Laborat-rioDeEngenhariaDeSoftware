function addTextInList(){
    let li = document.createElement("li")
    li.innerText = document.getElementsByTagName("input")[0].value

    let list = document.getElementsByTagName("li")

    if (list.length === 0) {
        document.getElementById("list").append(li)
    } else {
        for (let i = 0; i < list.length; i++) {
            if (i === list.length - 1) {
                li.innerText <= list.item(i).innerText ? list.item(i).before(li) : list.item(i).after(li)
                break
            } else if (li.innerText <= list.item(i).innerText) {
                list.item(i).before(li)
                break
            }
        }
    }
}

document.getElementsByTagName("button")[0].addEventListener("click", addTextInList)
