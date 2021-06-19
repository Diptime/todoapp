
import './App.css';
function Todo(props) {
  return (
    <div className={props.item.completed?"cut":null}>
      <input type="checkbox" checked={props.item.completed} key={props.item.key} onChange={() => props.clickHandler(props.item.id)} />
      <p>
        {props.item.text}
      </p>

    </div>

  )
}
export default Todo

/*
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>*/