"""Publish the seeded curriculum for learner access."""

from alembic import op
import sqlalchemy as sa


revision = "20261104_0001"
down_revision = "20261028_0005"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute(
        sa.text(
            "UPDATE learning_modules "
            "SET is_published = TRUE "
            "WHERE week_number BETWEEN 1 AND 12"
        )
    )


def downgrade() -> None:
    op.execute(
        sa.text(
            "UPDATE learning_modules "
            "SET is_published = FALSE "
            "WHERE week_number BETWEEN 1 AND 12"
        )
    )
