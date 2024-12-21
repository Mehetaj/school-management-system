import { Badge } from "../ui/badge";


const SmallTitle = ({title}:{title: string}) => {
    return (
        <Badge variant="secondary" className='h-8 items-center gap-2 pl-4 pr-6 text-base'>
            <span className='text-primary'>✦ {title}</span>
        </Badge>
    );
};

export default SmallTitle;