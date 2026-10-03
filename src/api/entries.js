const KEY='cinetrack_entries'

function readAll(){
    const text=localStorage.getItem(KEY)
    return text ? JSON.parse(text) : []
}

function writeAll(entries){
    localStorage.setItem(KEY, JSON.stringify(entries))
}

function calcOverall(ratings){
    const values=Object.values(ratings || {}).filter((v)=> v>0)
    if (values.length === 0) return 0
    const total = values.reduce((sum,v)=> sum+v,0)
    return Math.round((total/values.length)*10)/10
}

export async function getEntries(){
    return readAll()
}

export async function createEntry(data){
    const entries=readAll()
    const newEntry={
        ...data,
        id:crypto.randomUUID(),
        overallrating:calcOverall(data.ratings),
    }
    writeAll([newEntry, ...entries])
    return newEntry
}

export async function updateEntry(id, data){
    const entries=readAll()
    const updatedEntries=entries.map((entry)=>
        entry.id===id
            ? {
                ...entry,
                ...data,
                id:entry.id,
                overallrating:calcOverall(data.ratings ?? entry.ratings),
              }
            : entry
    )
    writeAll(updatedEntries)
    return updatedEntries.find(entry => entry.id === id)

}

export async function deleteEntry(id){
    const entries=readAll()
    const filteredEntries=entries.filter((entry)=>entry.id!==id)
    writeAll(filteredEntries)
    return true
}