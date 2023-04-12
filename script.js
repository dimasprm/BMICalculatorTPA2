/* ================== ambil element =================== */

const form = document.querySelector("#cal-form")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const btncal = document.querySelector("#btn-cal")
const result = document.querySelector("#result")

/* ================== manipulasi / event =============== */

btncal.addEventListener("click", (event) => {
    event.preventDefault()

    let cal = weight.value / ((height.value / 100) ** 2) // menghitung
    cal = cal.toFixed(1) /* membulatkan menjadi 1 angka di belakang koma */

    let category = "" /* inisialisasi variabel kategori */

    if (cal < 18.5) {
        category = "Underweight" /*cal kurang dari 18.5, maka kategori Underweight */
    } else if (cal >= 18.5 && cal <= 24.9) {
        category = "Normal weight" /* cal antara 18.5 dan 24.9, maka kategori Normal weight */
    } else if (cal >= 25 && cal <= 29.9) {
        category = "Overweight" //* cal antara 25 dan 29.9, maka kategori Overweight */
    } else {
        category = "Obesity" /* cal lebih dari atau sama dengan 30, maka kategori Obesity */
    }

    result.innerHTML = `Your cal is <strong>${cal}</strong> which means You are <strong>${category}</strong>.` /* menampilkan hasil cal dan kategori pada page */

    form.reset() /* mengosongkan nilai input */
})