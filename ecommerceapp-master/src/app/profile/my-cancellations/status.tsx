interface StatusProps {
    status: string;
}


export const Status = ({ status }: StatusProps) => {
    return (
        <p
            className={
                status === "Cancelled"
                    ? `ordercomplete orderstatus`
                    : status === "Pending"
                        ? `orderprocessing orderstatus`
                        : `orderrejected orderstatus`
            }
        >
            {status}
        </p>
    )
}