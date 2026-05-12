type IconWithLinkProps = {
    href: string;
    src: string;
    className?: string;
};

export function IconWithLink({ href, src, className }: IconWithLinkProps) {
    return (
        <a href={href} className={className}>
            <img src={src} width={"45px"} height={"45px"} alt={src}  />
        </a>
    );
}

export const iconLinks = {
    telegram: `/icons/social/telegram.svg`,
    discord: `/icons/social/discord.png`,
    github: `/icons/social/github.png`,
    steam: `/icons/social/steam.png`,
}