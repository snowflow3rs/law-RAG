from unstructured.partition.pdf import partition_pdf
from unstructured.staging.base import elements_to_json

elements = partition_pdf(
    filename="finance_report.pdf",
    # Unstructured Helpers
    strategy="hi_res",
    infer_table_structure=True,
    model_name="yolox"
)

# from unstructured.partition.auto import partition
# elements = partition(filename="finance_report.pdf")
# print("\n\n".join([str(el) for el in elements]))


# elements = partition_pdf("example-docs/layout-parser-paper-fast.pdf")
# elements_fast = partition_pdf("example-docs/layout-parser-paper-fast.pdf", strategy="fast")
print(elements)