export const allData = async () => {
    const res = await fetch('https://qurbani-hat-nine.vercel.app/data.json')
    const data =  await res.json()
    return data
}