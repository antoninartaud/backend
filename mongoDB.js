use school

db.createCollection('students')

show collections

db.students.insertMany([
  {name: 'Véronique', ville: 'Paris'},
  {name: 'Steeven', ville: 'Lyon'},
  {name: 'Marc', ville:'Marseille'},
  {name: 'Nour', ville: 'Lyon'},
  {name: 'Romain', ville: 'Paris'},
  {name: 'Sophie', ville: 'Paris'}
])

db.students.find()
  
db.createCollection('languages')

show collections

db.languages.insertMany([
  {name: 'French'},
  {name: 'English'},
  {name: 'German'},
  {name: 'Spanish'},
  { name: 'Mandarin'}
])

db.languages.find()

db.createCollection('Favorites')

show collections

db.favorites.insertMany([
  { class: 'Maths', sport: 'Cricket', student_id: 2 },
  { class: 'Music', sport: 'Hip-hop', student_id: 6 },
  { class: 'Arts', sport: 'Boxing', student_id: 1 },
  { class: 'Littérature', sport: 'Tennis', student_id: 3 },
  { class: 'Computer Science', sport: 'Tennis', student_id: 5 },
  { class: 'Arts', sport: 'Baseball', student_id: 4 }
])
  
db.favorites.find()

db.createCollection('students_languages')

show collections

db.students_languages.insertMany([
  { student_id: 1, language_id: 1},
  { student_id: 1, language_id: 2},
  { student_id: 2, language_id: 1},
  { student_id: 2, language_id: 3},
  { student_id: 3, language_id: 1},
  { student_id: 4, language_id: 1},
  { student_id: 4, language_id: 2},
  { student_id: 4, language_id: 4},
  { student_id: 4, language_id: 5},
  { student_id: 5, language_id: 1},
  { student_id: 5, language_id: 5},
  { student_id: 6, language_id: 1},
  { student_id: 6, language_id: 2},
  { student_id: 6, language_id: 3}
])

// Rapport lvl1
db.students.find({ _id: ObjectId("60ba1ebae8a59b5beaa4a71c") })

db.students.find({ _id: ObjectId("60ba1ebae8a59b5beaa4a71f") })

db.students.find({ _id: ObjectId("60ba1ebae8a59b5beaa4a71a") }, { ville: 1, name: 1 })

db.students.find({ _id: ObjectId("60ba1ebae8a59b5beaa4a71b") }, { name: 1 })

db.students.find({ ville: 'Paris' })

db.students.find({ ville: 'Lyon' })

// Rapport lvl2
