import "./styles.css";

const onClicAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.id = "completeButton";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton);
  });
  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.id = "deleteButton";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton);
  });

  //divタグに要素を入れる
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //liタグ生成
  const li = document.createElement("li");
  li.appendChild(div);

  //未完了のリストに追加
  const incompleteUl = document.getElementById("incomplete-list");
  incompleteUl.appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  const targetDiv = target.parentNode;
  const targetTarget = targetDiv.parentNode;
  document.getElementById("incomplete-list").removeChild(targetTarget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClicAdd());
