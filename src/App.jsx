

function App() {
 

  return (
  <div>
<h1>The input element</h1>

<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"></input><br/><br/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"></input><br/><br/>
  <input type="submit" value="Submit"></input>
</form>

<p>Click the "Submit" button and the form-data will be sent to a page on the 
server called "action_page.php".</p>
  </div>
  )
}

export default App
