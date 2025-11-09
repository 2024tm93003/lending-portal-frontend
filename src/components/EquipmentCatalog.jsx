const EquipmentCatalog = ({ items, filters, onFiltersChange }) => {
  const updateFilters = (changes) => {
    onFiltersChange({ ...filters, ...changes });
  };

  return (
    <div className="cardy">
      <h2>Equipment Catalog</h2>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 200px" }}>
          <label>Filter by category</label>
          <input
            value={filters.category}
            placeholder="Sports, Camera..."
            onChange={(event) => updateFilters({ category: event.target.value })}
          />
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <input
            type="checkbox"
            checked={filters.availableOnly}
            onChange={(event) => updateFilters({ availableOnly: event.target.checked })}
          />
          only show available
        </label>
      </div>
      <div className="equipGrid" style={{ marginTop: 18 }}>
        {items.map((equip) => (
          <div key={equip.id} className="equipTile">
            <h3 style={{ margin: "0 0 6px 0" }}>{equip.itemName}</h3>
            <p className="tiny">{equip.category}</p>
            <p>{equip.conditionNote}</p>
            <p className="tiny">
              {equip.availableQuantity} free / {equip.totalQuantity} total
            </p>
          </div>
        ))}
        {items.length === 0 && <p>No equipment listed yet.</p>}
      </div>
    </div>
  );
};

export default EquipmentCatalog;
