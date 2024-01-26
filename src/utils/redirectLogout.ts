export default function redirectLogout() {
  const redirectUrl = "/#/login";
  // localstrageを削除
  localStorage.removeItem("bearer");

  alert(
    "ログイン情報登録の未確認、もしくはログイン情報の有効期限が切れております。\n恐れ入りますが再度ログインをお願いいたします。"
  );
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 300);
}
