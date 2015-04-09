# DataBootcampApi
API to use for practicing during data bootcamp.
API saves and provides information about some characters from tv series game of thrones.

usage:

(examples here assume that you use jquery in your project)

The api is hosted at http://api.hack4mikkeli.fi
The index will give out description about the api in json format.

Path **/list** will give out a list with names and ids of each chracter currently saved to database.
```javascript
    $.getJSON('http://api.hack4mikkeli.fi/list', function(characters){
      for(var i = 0, j = characters.length; i < j;i++){
        var character = characters[i];
        console.log(character.name);
        //Do something else...
      }
    });
```
Data received will be something like
```
[{"_id":"552652022ee009e65fc86179","name":"Jon Snow"},
{"_id":"552652022ee009e65fc8617a","name":"Ned Stark"},
{"_id":"552652022ee009e65fc8617b","name":"Sansa Stark"}
...]
```

Path **/character/:id** will give out more information about the character whose "_id" is used to replace the ":id" in the path.

For example if we wanted to get more information about "Jon Snow" we would make GET request to **/character/552652022ee009e65fc86179** like shown below.

```javascript
    $.getJSON('http://api.hack4mikkeli.fi//character/552652022ee009e65fc86179', function(jon){
      console.log(jon.name);
      //Do something with more specific data
    });
```
Output will be something like:
```
{
  "_id":"552652022ee009e65fc86179",
  "name":"Jon Snow",
  "portrait":"",
  "bio":"",
  "liege":[],
  "lovers":[],
  "marriage":[],
  "children":[],
  "closeFriends":["Robb Stark","Arya Stark","Tyrion Lannister"],
  "siblings":["Sansa Stark","Arya Stark","Robb Stark","Rickon Stark","Bran Stark"],
  "parents":["Ned Stark"]
}
```

To add new characters to the database, you need to send post request to **/character/create**
```javascript
var character = {
  name: 'Harry Potter',
  bio: 'Wizard with lightning mark on his forehead.',
  parents: ['James Potter', 'Lily Potter']
};
$.post('http://api.hack4mikkeli.fi/character/create', character, function(res){
  console.log(res);
});
```
Response will be similar as requesting specific character with an "_id" as shown earlier.

