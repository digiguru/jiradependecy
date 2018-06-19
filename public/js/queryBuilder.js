

export function queryBuilder() {
    const query = document.getElementById('query');
    const queryValue = query.options[query.selectedIndex].value || "project";

    const option = document.getElementById('option');
    const optionValue = option.value || "FAB";
    
    const endpoint = `${queryValue}/${optionValue}`;

    return endpoint;
}