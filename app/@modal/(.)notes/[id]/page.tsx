'use client'
import css from '../../../notes/[id]/NoteDetails.module.css'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getSingleNote } from '@/lib/api'
import Modal from '@/components/Modal/Modal'
import { useRouter } from 'next/navigation'

const NotePreview = () => {
    const { id } = useParams<{ id: string }>()
    const router = useRouter()
    
    const {data, isLoading, isError,} = useQuery({
        queryKey: ['note', id],
        queryFn: () => getSingleNote(id),
        refetchOnMount: false
    })

    const HandleClose = () => {
        router.back();
    };
 
    return (
        <Modal onClose={HandleClose}>
        <div className={css.container}>
            {isLoading ? (<p>Loading, please wait...</p>
            ) : isError || !data ? (<p>Something went wrong.</p>
            ) :
                <div className={css.item}>
                    <div className={css.header}>
                        <h2>{data?.title}</h2>
                    </div>
                    <p className={css.content}>{data?.content}</p>
                    <p className={css.date}>{data?.createdAt}</p>
                </div> }
</div > </Modal>
    )
}

export default NotePreview