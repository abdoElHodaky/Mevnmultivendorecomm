const doPagination = (pageNum = 1, limitNum=5)=> {
    const page = parseInt(pageNum);
    const limit = parseInt(limitNum);
    const skip = (page-1) * limit;
    return { skip, limit };
};

export default doPagination;