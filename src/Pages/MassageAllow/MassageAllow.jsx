import s from "./MassageAllow.module.scss"

function MassageAllow() {
    return(
        <div className={s.container}>
            <div className={s.content}>
            <p className={s.titleMine}>
                Користувач зі звичайними правами має право на створення
                лише п'яьох кошторисів! Будь ласка зверніться за розшириними правами до адміністратора!
            </p>
            <div>
              <p className={s.contactTitle}>Контакти адміністратора:</p>  
              <p className={s.contact}>Email: <a href="mailto:vitaliy_piddubchak@ukr.net">vitaliy_piddubchak@ukr.net</a></p> 
              <p className={s.contact}>тел:<a href="tel:+380971428868">+38 (097)-14-28-868</a></p>
              <div className={s.socialContainer}>
               <a href="https://t.me/Vi_Dub" target="_blank">
               <img width="40" height="40" src="https://resonant-kangaroo-5ff733.netlify.app/telegram.svg" class="icon" id="telegram"/>
               </a>
               <a href="https://www.facebook.com/profile.php?id=100004860166902" target="_blank">
               <img width="40" height="40" src="https://resonant-kangaroo-5ff733.netlify.app/facebook.svg" id="facebook" class="icon"/>
               </a>
               </div>
            </div>
           
            </div>
        </div>
    )
}

export default MassageAllow;