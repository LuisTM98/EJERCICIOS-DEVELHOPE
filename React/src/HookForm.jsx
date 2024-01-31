import { useHookForm } from "./useHookForm";

export function HookForm() {
  const { username, password, handleDataUpdate } = useHookForm();

  return (
    <div>
    <h3>{username}, {password}</h3>
      <form>
        <input type="text" id="username" onChange={handleDataUpdate}></input>
        <input type="text" id="password" onChange={handleDataUpdate}></input>
      </form>
    </div>
  );
}
