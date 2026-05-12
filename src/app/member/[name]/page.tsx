"use client"

import Image from "next/image";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {iconLinks, IconWithLink} from "@/components/icons";
import styles from "./page.module.css";

type UserData = {
    username: string;
    bio: string;
    links: {
        telegram: string | null;
        discord: string | null;
        github: string | null;
        steam: string | null;
    }
}

export default function Page() {
    const {name} = useParams() as { name: string }

    const [data, setData] = useState<UserData | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!name) return;

        setLoading(true);
        getData(name)
            .then((result) => {
                setData(result);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [name]);

    if (loading) return <div>Загрузка...</div>;
    if (!data) return <div>Пользователь не найден</div>;


    const imgUrl = `/members/${name}/photo.png`
    return (
        <div className={styles.userContainer}>
            <div className={styles.columnsContainer}>
                <div className={styles.userColumn}>
                    <Image src={imgUrl} alt={name}
                           className={`${styles.userImage} ${styles.borderClass}`}
                           width={400} height={400}/>
                    <div className={styles.userName}>{data.username}</div>
                </div>
                <div className={`${styles.firstColumn} ${styles.border}`}>
                    <div className={`${styles.aboutMe} ${styles.borderClass}`}>
                        <h2 className={styles.categoryHeader}>About me</h2>
                        <div>{data.bio}</div>
                    </div>
                </div>
                <div className={`${styles.secondColumn} ${styles.border}`}>
                    <div className={`${styles.linksContainer} ${styles.borderClass}`}>
                        <h2 className={styles.categoryHeader}>Links</h2>
                        <div className="flex">
                            {
                                Object.entries(data.links).map(([platform, url]) => url
                                    ?
                                    <IconWithLink className={"mr-3"} key={platform} href={url} src={iconLinks[platform as keyof typeof iconLinks]} />
                                    : null)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const getData = async (name: string) => {
    const res = await fetch(`/members/${name}/data.json`)
    if (!res.ok) return;
    return await res.json() as UserData | undefined;
}