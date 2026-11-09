export function grouperParLignes(elements, parLigne = 3) {
    return Object.values(
        Object.groupBy(elements, (_, i) => Math.floor(i / parLigne))
    );
}