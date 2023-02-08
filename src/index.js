import "./styles.css";

const onClicAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
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

//未完了のリストに追加する関数
const createIncompleteList = (text) => {
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.id = "completeButton";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODOの内容textを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    //console.log(addTarget);

    //liタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //console.log(addTarget);
    //button（戻す）タグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deletediv = backButton.parentNode;
      const deleteTarget = deletediv.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //textを取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    //divの中に配置
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //liタグ生成
    const li = document.createElement("li");

    //liタグにdivを配置
    li.appendChild(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
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
