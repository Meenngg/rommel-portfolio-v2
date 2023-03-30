export function SkillTab(props) {
    return ( 
        <div className="flex-1 flex items-center gap-1">
            <div className="flex-1 col-span-2 flex justify-end">
                <span>{props.logoName}</span>
            </div>
            <div className="flex-auto col-span-3">
                <span>{props.stack}</span>
            </div>
        </div>
     );
}

export default SkillTab;