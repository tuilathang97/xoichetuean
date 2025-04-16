import {blogConfig, pluginConfig} from "@/blog.config";
import SocialList from "@/components/social-list";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import Newsletter from "@/plugins/newsletter";
import {Label} from "@/components/ui/label";

const Footer = () => {
    const {author, footer: {isShow, isShowPoweredBy}} = blogConfig

    const {title, description, position} = pluginConfig.newsletter

    return (
        isShow && <div>
            <Separator/>
            <footer className={'container py-8 space-y-8'}>
                
            </footer>
        </div>
    );
}

export default Footer