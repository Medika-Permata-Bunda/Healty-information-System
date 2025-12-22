CREATE TABLE IF NOT EXISTS category (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	id_ref_category UUID NOT NULL REFERENCES ref_category(id) ON DELETE CASCADE,
	name VARCHAR(80) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMP NOT NULL DEFAULT NOW()

	-- write up migration here
);

-- Trigger agar updated_at auto-update
CREATE OR REPLACE FUNCTION update_category_updated_at()
RETURNS TRIGGER AS $$
BEGIN
	NEW.updated_at = NOW();
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER category_updated_at_trigger
BEFORE UPDATE ON category
FOR EACH ROW
EXECUTE FUNCTION update_category_updated_at();
