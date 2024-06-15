import s from "./AdminFunctions.module.scss";

function AdminFunctions() {
    return (
        <div className={s.adminFunction}>
            <h3>Доступ користувачів</h3>
            <form >
                <div className={s.input}>
                <label id="data">Кількість днів</label>
                <input type="number" name="data" />
                </div>
                <div className={s.input}>
                <label id="email">Email</label>
                <input type="email" name="email" />
                </div>
                <button type="submit">Надати</button>
            </form>
        </div>
    )
}

export default AdminFunctions;